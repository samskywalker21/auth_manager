import type { HttpContext } from '@adonisjs/core/http'
import Division from '#models/division'
import {
  findDivisionByIdValidator,
  insertDivisionValidator,
  updateDivisionValidator,
} from '#validators/division'

export default class DivisionsController {
  async getAllDivisions() {
    const res = await Division.all()
    return res
  }

  async getActiveDivisions() {
    const res = await Division.findManyBy({ status: 'A' })
    return res
  }

  async getDivisionsPaginated({ request }: HttpContext) {
    const page = request.input('page', 1)
    const searchString = request.input('search', '').trim()
    const limit = 10
    const query = Division.query()

    if (searchString) {
      await query
        .whereRaw(`division_name LIKE ?`, [`%${searchString}%`])
        .orWhereRaw(`division_code LIKE ?`, [`%${searchString}%`])
    }

    let res = await query.paginate(page, limit)

    if (page > res.lastPage && res.lastPage > 0) {
      res = await query.paginate(1, limit)
    }

    return res
  }

  async getDivisionById({ request }: HttpContext) {
    await request.validateUsing(findDivisionByIdValidator)
    const res = await Division.findOrFail(request.param('id'))
    return res
  }

  async insertDivision({ request }: HttpContext) {
    await request.validateUsing(insertDivisionValidator)
    const newDivision = await Division.create(request.body())
    const res = await newDivision.save()
    return res
  }

  async updateDivision({ request }: HttpContext) {
    await request.validateUsing(updateDivisionValidator)
    const division = await Division.findOrFail(request.param('id'))
    const res = await division.merge(request.body()).save()
    return res
  }
}
