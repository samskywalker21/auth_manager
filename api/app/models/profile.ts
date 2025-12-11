import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeFetch, beforeFind, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import Section from './section.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['username'],
  passwordColumnName: 'password',
})

export default class Profile extends compose(BaseModel, AuthFinder) {
  static table = 'profile'

  static accessTokens = DbAccessTokensProvider.forModel(Profile, {
    expiresIn: '8 hours',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })

  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'first_name' })
  declare firstName: string

  @column({ serializeAs: 'middle_name' })
  declare middleName: string

  @column({ serializeAs: 'last_name' })
  declare lastName: string

  @column()
  declare position: string

  @column()
  declare username: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare status: 'A' | 'I'

  @column({ serializeAs: 'is_admin' })
  declare isAdmin: boolean

  @column({ serializeAs: 'section_id' })
  declare sectionId: number

  @belongsTo(() => Section)
  declare section: BelongsTo<typeof Section>

  @column.dateTime({ autoCreate: true, serializeAs: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updated_at' })
  declare updatedAt: DateTime

  @beforeFind()
  @beforeFetch()
  static includeSection(query: ModelQueryBuilderContract<typeof Profile>) {
    query.preload('section')
  }
}
