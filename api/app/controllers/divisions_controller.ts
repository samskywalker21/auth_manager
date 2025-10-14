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
    const division = await Division.findOrFail(request.param('1'))
    const res = await division.merge(request.body()).save()
    return res
  }
}
