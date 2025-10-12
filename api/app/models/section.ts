import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Division from './division.js'

export default class Section extends BaseModel {
  static table = 'section'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare sectionName: string

  @column()
  declare sectionCode: string

  @column()
  declare status: 'A' | 'I'

  @column()
  declare divisionId: number

  @belongsTo(() => Division)
  declare division: BelongsTo<typeof Division>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
