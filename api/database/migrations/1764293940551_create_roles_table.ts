import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned()
      table
        .integer('profile_id')
        .unsigned()
        .references('id')
        .inTable('profile')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.string('system').notNullable()
      table
        .enum('access', [1, 2, 3])
        .notNullable()
        .defaultTo(3)
        .comment('1 is for Admin, 2 is Pseudo admin, 3 is for Standard Users')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
