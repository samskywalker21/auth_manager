import Profile from '#models/profile'
import {
  findProfileByIdValidator,
  insertProfileValidator,
  updateProfileValidator,
} from '#validators/profile'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfilesController {
  async getAllProfiles() {
    const res = await Profile.all()
    return res
  }

  async getActiveProfiles() {
    const res = await Profile.findManyBy({ status: 'A' })
    return res
  }

  async getProfileById({ request }: HttpContext) {
    await request.validateUsing(findProfileByIdValidator)
    const res = await Profile.findOrFail(request.param('id'))
    return res
  }

  async insertProfile({ request }: HttpContext) {
    await request.validateUsing(insertProfileValidator)
    const newProfile = await Profile.create(request.body())
    const res = await newProfile.save()
    return res
  }

  async updateProfile({ request }: HttpContext) {
    await request.validateUsing(updateProfileValidator)
    const profile = await Profile.findOrFail(request.param('id'))
    const res = await profile.merge(request.body()).save()
    return res
  }
}
