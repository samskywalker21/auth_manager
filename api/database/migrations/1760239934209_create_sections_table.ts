import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'section'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned()
      table.string('section_name', 100).notNullable()
      table.string('section_code', 5).notNullable()
      table.enum('status', ['A', 'B']).defaultTo('A').notNullable()
      table
        .integer('division_id')
        .unsigned()
        .references('id')
        .inTable('division')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
