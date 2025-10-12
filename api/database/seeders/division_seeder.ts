import Division from '#models/division'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Division.createMany([
      {
        divisionName: 'Management Support Division',
        divisionCode: 'MSD',
      },
      {
        divisionName: 'Local Health Support Division',
        divisionCode: 'LHSD',
      },
      {
        divisionName: 'Regulations, Licensing, and Enforcement Division',
        divisionCode: 'RLED',
      },
      {
        divisionName: 'Office of the Regional/Assistant Regional Director',
        divisionCode: 'ORD',
      },
      {
        divisionName: 'Provincial/City DOH Office',
        divisionCode: 'PCDOH',
      },
    ])
  }
}
