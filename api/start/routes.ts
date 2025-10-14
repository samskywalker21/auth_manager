/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DivisionController = () => import('#controllers/divisions_controller')
const SectionController = () => import('#controllers/sections_controller')
const ProfileController = () => import('#controllers/profiles_controller')

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
    router
      .group(() => {
        router.get('all', [SectionController, 'getAllSections'])
        router.get('active', [SectionController, 'getActiveSections'])
        router.get(':id', [SectionController, 'getSectionById'])
        router.post('insert', [SectionController, 'insertSection'])
        router.patch('update/:id', [SectionController, 'updateSection'])
      })
      .prefix('section')
    router
      .group(() => {
        router.get('all', [ProfileController, 'getAllProfiles'])
        router.get('active', [ProfileController, 'getActiveProfiles'])
        router.get(':id', [ProfileController, 'getProfileById'])
        router.post('insert', [ProfileController, 'insertProfile'])
        router.patch('update/:id', [ProfileController, 'updateProfile'])
      })
      .prefix('profile')
  })
  .prefix('api')
