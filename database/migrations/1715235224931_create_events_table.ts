import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('description')
      table.boolean('is_free')
      table.boolean('is_online')
      table.string('url')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').notNullable()
      table.specificType('categories', 'int[]')
      table.specificType('event_dates', 'jsonb[]')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
