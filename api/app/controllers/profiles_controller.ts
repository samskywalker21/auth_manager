import Profile from '#models/profile'
import {
  changePasswordValidator,
  findProfileByIdValidator,
  insertProfileValidator,
  updateProfileValidator,
} from '#validators/profile'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class ProfilesController {
  async getAllProfiles() {
    const res = await Profile.all()
    return res
  }

  async getProfilesPaginated({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const search = request.input('search', '').trim()
    const query = Profile.query()

    if (search) {
      await query
        .whereRaw('first_name LIKE ?', [`%${search}%`])
        .orWhereRaw('middle_name LIKE ?', [`%${search}%`])
        .orWhereRaw('last_name LIKE ?', [`%${search}%`])
        .orWhereRaw('username LIKE ?', [`%${search}%`])
    }

    const raw = await query.paginate(page, limit)
    const { meta, data } = raw.toJSON()
    const res = data.map((row) => {
      const { section, ...profile } = row.toJSON()
      const { division, ...chunk } = section
      return { ...division, ...chunk, ...profile }
    })

    return { meta, data: res }
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

  async changePassword({ request, response }: HttpContext) {
    await request.validateUsing(changePasswordValidator)
    const profile = await Profile.findOrFail(request.param('id'))
    if (profile) {
      if (await hash.verify(profile.password, request.body().old_password)) {
        const res = profile.merge({ password: request.body().password }).save()
        return res
      } else {
        response.safeStatus(500).json
        return { message: 'Password does not match old' }
      }
    }
    response.safeStatus(500).json
    return { message: `No user found with ID: ${request.param('id')}` }
  }

  async updateProfile({ request }: HttpContext) {
    await request.validateUsing(updateProfileValidator)
    const profile = await Profile.findOrFail(request.param('id'))
    const res = await profile.merge(request.body()).save()
    return res
  }
}
