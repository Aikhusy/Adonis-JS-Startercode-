import { Status } from '#models/siswa'
import vine from '@vinejs/vine'

export const createSiswaValidator = vine.compile(
    vine.object({
      nama_siswa: vine.string().trim().minLength(2),
      
        is_deleted: vine.boolean(),
  
        status: vine.enum(Status),
  
        NIS: vine.string().trim().minLength(6).unique(async (db, value) => {
          const siswa = await db
            .from('siswas')
            .where('NIS', value)
            .first()
          return !siswa
        }),
  
        NISN: vine.string().trim().minLength(6).unique(async (db, value) => {
          const siswa = await db
            .from('siswas')
            .where('NISN', value)
            .first()
          return !siswa
        }),
        
    })
  )
  
  /**
   * Validates the post's update action
   */
  export const updateSiswaValidator = vine.compile(
    vine.object({
        
        id:vine.number(),  


        nama_siswa: vine.string().trim().minLength(2),
    
        is_deleted: vine.boolean(),
  
        status: vine.enum(Status),

        
        NIS: vine.string().trim().minLength(6).unique(async (db, value,field) => {

          const siswa = await db
            .from('siswas')
            .whereNot('id', field.meta.id)
            .where('NIS', value)
            .first()
          return !siswa
        }),
  
        NISN: vine.string().trim().minLength(6).unique(async (db, value,field) => {
          const siswa = await db
            .from('siswas')
            .whereNot('id', field.meta.id)
            .where('NISN', value)
            .first()
          return !siswa
        }),
  
    })
  )