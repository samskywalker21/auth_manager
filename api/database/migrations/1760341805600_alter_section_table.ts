import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'section'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('section_code', 5).alter().unique().index()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropUnique(['section_code'])
      table.dropIndex(['section_code'])
      table.string('section_code', 5).alter()
    })
  }
}
