import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('system_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('systems')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    })
  }
}
