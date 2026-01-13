import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'systems'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned()
      table.string('system_name')
      table.enum('status', ['A', 'I']).notNullable().defaultTo('A')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
