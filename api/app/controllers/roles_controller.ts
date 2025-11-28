import type { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'
import { insertRolesValidator } from '#validators/role'

export default class RolesController {
  async getUserRoles({ request }: HttpContext) {
    const id = request.param('id')
    const res = await Role.findManyBy({ id })
    return res
  }

  async insertUserRoles({ request }: HttpContext) {
    await request.validateUsing(insertRolesValidator)
    const roles = request.body().roles
    const toInsert = await roles.map((row: { system: string; access: number }) => ({
      profile_id: Number(request.body().profile),
      system: row.system,
      access: row.access,
    }))

    const res = await Role.createMany(toInsert)
    return res
  }

  async updateUserRoles() {}
}
