import Siswa from '#models/siswa'
import { HttpContext } from '@adonisjs/core/http'
import {
  createSiswaValidator,
  updateSiswaValidator
} from '#validators/siswa'

export default class SiswasController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const data = await Siswa.query().select('nama_siswa', 'status','NISN','NIS','id');

    return view.render('pages/layouts/Siswa/table', { data });
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/layouts/Siswa/form_create');
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const data = request.except(['_csrf'])

    const payload = await createSiswaValidator.validate(data)

    await Siswa.create(payload);

    return response.redirect().toRoute('siswa.index');
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const data = await Siswa.find(params.id);

    return view.render('pages/layouts/Siswa/table', { data })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const siswa = await Siswa.findOrFail(params.id)
    console.log(siswa)

    const data = {
      nama_siswa: siswa.nama_siswa,
      status: siswa.status,
      NISN: siswa.$extras.NISN,
      NIS: siswa.$extras.NIS,
      id: siswa.id,
    }

    return view.render('pages/layouts/Siswa/form_edit',{ data })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const siswa = await Siswa.find(params.id);

    if (!siswa) {
      return response.redirect().toRoute('siswa.index',{messages:"Tidak Boleh Kosong"});
    }

    const data = request.except(['_csrf']);

    const payload = await updateSiswaValidator.validate(data)
    
    siswa.merge(data);
    await siswa.save();

    return response.redirect().toRoute('siswa.index');
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const siswa = await Siswa.find(params.id);

    if (!siswa) {
      return response.status(404).json({ message: 'Siswa not found' });
    }

    await siswa.delete();

    return response.redirect().toRoute('siswa.index');
  }
}
