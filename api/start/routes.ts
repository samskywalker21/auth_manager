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
const RolesController = () => import('#controllers/roles_controller')
const AuthController = () => import('#controllers/auth_controller')
const SystemsController = () => import('#controllers/systems_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('all', [DivisionController, 'getAllDivisions'])
        router.get('active', [DivisionController, 'getActiveDivisions'])
        router.get('page', [DivisionController, 'getDivisionsPaginated'])
        router.get(':id', [DivisionController, 'getDivisionById'])
        router.post('insert', [DivisionController, 'insertDivision'])
        router.patch('update/:id', [DivisionController, 'updateDivision'])
      })
      .prefix('division')
      .use(middleware.auth({ guards: ['api'] }))

    router
      .group(() => {
        router.get('all', [SectionController, 'getAllSections'])
        router.get('page', [SectionController, 'getSectionsPaginated'])
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
        router.get('page', [ProfileController, 'getProfilesPaginated'])
        router.get(':id', [ProfileController, 'getProfileById'])
        router.post('insert', [ProfileController, 'insertProfile'])
        router.patch('change_password/:id', [ProfileController, 'changePassword'])
        router.patch('update/:id', [ProfileController, 'updateProfile'])
        router.post('roles/insert', [RolesController, 'insertRoleById'])
        router.patch('roles/update', [RolesController, 'updateRoleById'])
        router.delete('roles/delete', [RolesController, 'deleteRoleById'])
        router.get('roles/:id', [RolesController, 'getRolesById'])
      })
      .prefix('profile')
      .use(middleware.auth({ guards: ['api'] }))

    router
      .group(() => {
        router.get('all', [SystemsController, 'getSystems'])
        router.get('paginated', [SystemsController, 'getSystemsPaginated'])
        router.get('active', [SystemsController, 'getActiveSystems'])
        router.get(':id', [SystemsController, 'getSystemById'])
        router.post('insert', [SystemsController, 'insertSystem'])
        router.patch('update/:id', [SystemsController, 'updateSystem'])
      })
      .prefix('system')
      .use(middleware.auth({ guards: ['api'] }))

    router
      .group(() => {
        router.post('login', [AuthController, 'login'])
        router.post('logout', [AuthController, 'logout']).use(middleware.auth({ guards: ['api'] }))
        router.post('verify', [AuthController, 'validateToken'])
        router
          .get('get_profile', [AuthController, 'getProfile'])
          .use(middleware.auth({ guards: ['api'] }))
        router
          .get('is_admin', [AuthController, 'isAdmin'])
          .use(middleware.auth({ guards: ['api'] }))
      })
      .prefix('auth')

    router.post('register', [ProfileController, 'insertProfile'])
    router.get('register/sections', [SectionController, 'getActiveSections'])
  })
  .prefix('api')
