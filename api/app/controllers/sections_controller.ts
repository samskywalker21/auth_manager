import { flatten } from 'flat'
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
    const flatres = res.map((row) => {
      const sectionObject = row.toJSON()
      const { division, ...rest } = sectionObject
      const flattenedDivision = flatten(division, { safe: true }) as Record<string, any>
      return { ...flattenedDivision, ...rest }
    })
    return flatres
  }

  async getSectionsPaginated({ request }: HttpContext) {
    const page = request.input('page', 1)
    const searchString = request.input('search', '').trim()
    const limit = 10
    const query = Section.query()

    if (searchString) {
      await query
        .whereRaw('section_name LIKE ?', [`%${searchString}`])
        .orWhereRaw('section_code LIKE ?', [`%${searchString}`])
    }

    let sectionPaged = await query.paginate(page, limit)

    if (page > sectionPaged.lastPage && sectionPaged.lastPage > 0) {
      sectionPaged = await query.paginate(1, limit)
    }

    const { meta, data } = sectionPaged.toJSON()
    const flatSection = data.map((row) => {
      const sectionObject = row.toJSON()
      const { division, ...rest } = sectionObject
      const flatDivision = flatten(division, { safe: true }) as Record<string, any>
      return { ...flatDivision, ...rest }
    })

    const res = { meta, data: flatSection }
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
