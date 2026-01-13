import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class System extends BaseModel {
  static table = 'systems'

  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'system_name' })
  declare systemName: string

  @column()
  declare status: 'A' | 'I'

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
