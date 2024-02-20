import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


export enum Status {
  Active = 'Aktif',
  Alumni = 'Alumni',
  Inactive = 'Tidak Aktif',
  Aktif = "Aktif"
}

export default class Siswa extends BaseModel {

  

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama_siswa:string

  @column()
  declare isDeleted:boolean

  @column()
  declare NIS:string

  @column()
  declare NISN:string

  @column()
  declare status: Status

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}