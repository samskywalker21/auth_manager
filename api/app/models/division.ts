import { DateTime } from 'luxon';
import { BaseModel, column } from '@adonisjs/lucid/orm';

export default class Division extends BaseModel {
  static table = 'division';

  @column({ isPrimary: true })
  declare id: number;

  @column({ serializeAs: 'division_name' })
  declare divisionName: string;

  @column({ serializeAs: 'division_code' })
  declare divisionCode: string;

  @column()
  declare status: 'A' | 'I';

  @column.dateTime({ autoCreate: true, serializeAs: 'created_at' })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updated_at' })
  declare updatedAt: DateTime;
}
