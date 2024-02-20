import Siswa, { Status } from '#models/siswa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await Siswa.createMany([
      {
        nama_siswa:"nama siswa 1",
        isDeleted:false,
        NIS:"1",
        NISN:"1",
        status:Status.Aktif
      },
      {
        nama_siswa:"nama siswa 2",
        isDeleted:false,
        NIS:"2",
        NISN:"2",
        status:Status.Aktif
      },
      {
        nama_siswa:"nama siswa 3",
        isDeleted:false,
        NIS:"3",
        NISN:"3",
        status:Status.Aktif
      },
    ])
  }
}