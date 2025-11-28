import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Profile from './profile.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Role extends BaseModel {
  static table = 'roles'

  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'profile_id' })
  declare profile_id: number

  @column({ serializeAs: 'system' })
  declare system: string

  @column({ serializeAs: 'access' })
  declare access: [1, 2, 3]

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Profile)
  declare profileId: BelongsTo<typeof Profile>
}
