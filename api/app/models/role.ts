import { DateTime } from 'luxon'
import { BaseModel, beforeFetch, belongsTo, column } from '@adonisjs/lucid/orm'
import Profile from './profile.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import System from './system.js'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

export default class Role extends BaseModel {
  static table = 'roles'

  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'profile_id' })
  declare profileId: number

  @column({ serializeAs: 'system' })
  declare systemId: number

  @column({ serializeAs: 'access' })
  declare access: [1, 2, 3]

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Profile)
  declare profile: BelongsTo<typeof Profile>

  @belongsTo(() => System)
  declare system: BelongsTo<typeof System>

  @beforeFetch()
  static fetchProfile(query: ModelQueryBuilderContract<typeof Role>) {
    query.preload('system')
  }
}
