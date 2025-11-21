/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const DivisionController = () => import('#controllers/divisions_controller')
const SectionController = () => import('#controllers/sections_controller')
const ProfileController = () => import('#controllers/profiles_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('all', [DivisionController, 'getAllDivisions'])
        router.get('active', [DivisionController, 'getActiveDivisions'])
        router.get(':id', [DivisionController, 'getDivisionById'])
        router.post('insert', [DivisionController, 'insertDivision'])
        router.patch('update/:id', [DivisionController, 'updateDivision'])
      })
      .prefix('division')
      .use(middleware.auth({ guards: ['api'] }))

    router
      .group(() => {
        router.get('all', [SectionController, 'getAllSections'])
        router.get(':id', [SectionController, 'getSectionById'])
        router.post('insert', [SectionController, 'insertSection'])
        router.patch('update/:id', [SectionController, 'updateSection'])
      })
      .prefix('section')
      .use(middleware.auth({ guards: ['api'] }))
    router
      .group(() => {
        router.get('all', [ProfileController, 'getAllProfiles'])
        router.get('active', [ProfileController, 'getActiveProfiles'])
        router.get(':id', [ProfileController, 'getProfileById'])
        router.post('insert', [ProfileController, 'insertProfile'])
        router.patch('update/:id', [ProfileController, 'updateProfile'])
      })
      .prefix('profile')
      .use(middleware.auth({ guards: ['api'] }))
    router
      .group(() => {
        router.post('login', [AuthController, 'login'])
        router.post('logout', [AuthController, 'logout']).use(middleware.auth({ guards: ['api'] }))
        router.post('verify', [AuthController, 'validateToken'])
      })
      .prefix('auth')
    router.post('register', [ProfileController, 'insertProfile'])
    router.get('register/sections', [SectionController, 'getActiveSections'])
  })
  .prefix('api')
