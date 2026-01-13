import type { HttpContext } from '@adonisjs/core/http'
import System from '#models/system'
import { insertSystem, updateSystem } from '#validators/system'

export default class SystemsController {
  async getSystems() {
    const res = await System.all()
    return res
  }

  async getSystemsPaginated({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const search = request.input('search', '').trim()
    const query = System.query()

    if (search) {
      query.whereRaw(`system_name LIKE ?`, [`%${search}%`])
    }

    const res = await query.paginate(page, limit)

    if (res.lastPage < page) {
      return await query.paginate(1, limit)
    }

    return res
  }

  async getActiveSystems() {
    const res = await System.findManyBy({ status: 'A' })
    return res
  }

  async getSystemById({ request }: HttpContext) {
    const id = request.param('id')
    const res = await System.findByOrFail({ id })
    return res
  }

  async insertSystem({ request }: HttpContext) {
    await request.validateUsing(insertSystem)
    const data = request.body()
    const newSystem = await System.create(data)
    const res = await newSystem.save()
    return res
  }

  async updateSystem({ request }: HttpContext) {
    await request.validateUsing(updateSystem)
    const id = request.param('id')
    const data = request.body()
    const system = await System.findByOrFail(id)
    const newSystem = await system.merge(data)
    const res = await newSystem.save()
    return res
  }
}
