import Siswa from '#models/siswa'
import type { HttpContext } from '@adonisjs/core/http'


export default class SiswasController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Siswa.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
    
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = request.body()

    return await Siswa.create(data)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}