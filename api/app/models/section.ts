import { DateTime } from 'luxon';
import { BaseModel, beforeFetch, belongsTo, column } from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Division from './division.js';
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model';

export default class Section extends BaseModel {
  static table = 'section';

  @column({ isPrimary: true })
  declare id: number;

  @column({ serializeAs: 'section_name' })
  declare sectionName: string;

  @column({ serializeAs: 'section_code' })
  declare sectionCode: string;

  @column()
  declare status: 'A' | 'I';

  @column({ serializeAs: 'division_id' })
  declare divisionId: number;

  @belongsTo(() => Division)
  declare division: BelongsTo<typeof Division>;

  @column.dateTime({ autoCreate: true, serializeAs: 'created_at' })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updated_at' })
  declare updatedAt: DateTime;

  @beforeFetch()
  static includeDivision(query: ModelQueryBuilderContract<typeof Section>) {
    query.preload('division');
  }
}
