import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'profile';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned();
      table.string('first_name', 30).notNullable();
      table.string('middle_name', 30);
      table.string('last_name', 30).notNullable();
      table.string('position', 100).notNullable();
      table.string('username', 30).notNullable().unique();
      table.string('password').notNullable();
      table.enum('status', ['A', 'I']).defaultTo('I');
      table.boolean('is_admin').defaultTo(false);
      table
        .integer('section_id')
        .unsigned()
        .references('id')
        .inTable('section')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
