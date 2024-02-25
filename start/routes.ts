import SiswasController from '#controllers/siswas_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/layouts/Content/dashboard')

router.on('/form').render('pages/layouts/Dashboard/form')

router.on('/login').render('pages/layouts/Auth/login')

router.on('/register').render('pages/layouts/Auth/register')

router.get('siswa', [SiswasController, 'index']).as('siswa.index');
router.post('siswa', [SiswasController, 'store']).as('siswa.store');
router.get('siswa/:id/edit', [SiswasController, 'edit']).as('siswa.edit');
router.put('siswa/:id', [SiswasController, 'update']).as('siswa.update');
router.delete('siswa/:id', [SiswasController, 'destroy']).as('siswa.destroy');
