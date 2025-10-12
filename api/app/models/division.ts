import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Division extends BaseModel {
  static table = 'division'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare divisionName: string

  @column()
  declare divisionCode: string

  @column()
  declare status: 'A' | 'I'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
