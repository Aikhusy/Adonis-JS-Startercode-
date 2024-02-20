import SiswasController from '#controllers/siswas_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/layouts/Content/dashboard')

router.on('/login').render('pages/layouts/Auth/login')

router.on('/register').render('pages/layouts/Auth/register')

router.resource('siswa', SiswasController)
