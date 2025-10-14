import Profile from '#models/profile'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Profile.createMany([
      {
        firstName: 'Min-jeong',
        lastName: 'Kim',
        position: 'Administrator',
        username: 'admin',
        password: 'admin',
        isAdmin: true,
        sectionId: 1,
      },
    ])
  }
}
