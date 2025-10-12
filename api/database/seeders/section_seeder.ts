import Section from '#models/section'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Section.createMany([
      {
        sectionName: 'Office of the Director',
        sectionCode: 'ORD',
        divisionId: 4,
      },
      {
        sectionName: 'Office of the Assistant Director',
        sectionCode: 'OARD',
        divisionId: 4,
      },
      {
        sectionName: 'Information and Communications Technology Unit',
        sectionCode: 'ICTU',
        divisionId: 4,
      },
    ])
  }
}
