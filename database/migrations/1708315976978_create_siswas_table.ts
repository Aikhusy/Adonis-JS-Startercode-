import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'siswas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.boolean('is_deleted').notNullable()
      table.string('nama_siswa').notNullable()
      table.string('NIS').unique().notNullable()
      table.string('NISN').unique().notNullable()
      table.enum('status',['Aktif','Alumni','Tidak Aktif']).notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}