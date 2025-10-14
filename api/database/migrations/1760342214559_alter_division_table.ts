import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'division'

  async up() {
    // this.schema.alterTable(this.tableName, (table) => {
    //   table.string('division_code', 5).alter().unique().index()
    // })
  }

  async down() {
    // this.schema.alterTable(this.tableName, (table) => {
    //   table.dropUnique(['division_code'])
    //   table.dropIndex(['division_code'])
    //   table.string('division_code', 5).alter()
    // })
  }
}
