import type { HttpContext } from '@adonisjs/core/http'
import Section from '#models/section'
import {
  findSectionByIdValidator,
  insertSectionValidator,
  updateSectionValidator,
} from '#validators/section'

export default class SectionsController {
  async getAllSections() {
    const res = await Section.all()
    return res
  }

  async getActiveSections() {
    const res = await Section.findManyBy({ status: 'A' })
    return res
  }

  async getSectionById({ request }: HttpContext) {
    await request.validateUsing(findSectionByIdValidator)
    const res = await Section.findOrFail(request.param('id'))
    return res
  }

  async insertSection({ request }: HttpContext) {
    await request.validateUsing(insertSectionValidator)
    const newSection = await Section.create(request.body())
    const res = await newSection.save()
    return res
  }

  async updateSection({ request }: HttpContext) {
    await request.validateUsing(updateSectionValidator)
    const section = await Section.findOrFail(request.param('id'))
    const res = await section.merge(request.body()).save()
    return res
  }
}
