/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import SiswasController from '#controllers/siswas_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.resource('siswa',SiswasController)