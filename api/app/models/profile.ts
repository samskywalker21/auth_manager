import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import Section from './section.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['username'],
  passwordColumnName: 'password',
})

export default class Profile extends compose(BaseModel, AuthFinder) {
  static table = 'profile'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare middleName: string

  @column()
  declare lastName: string

  @column()
  declare position: string

  @column()
  declare username: string

  @column()
  declare password: string

  @column()
  declare status: 'A' | 'I'

  @column()
  declare isAdmin: boolean

  @column()
  declare sectionId: number

  @belongsTo(() => Section)
  declare section: BelongsTo<typeof Section>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
