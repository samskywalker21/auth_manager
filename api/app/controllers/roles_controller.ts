import type { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'
import {
  deleteRoleValidator,
  getRolesByIdValidator,
  insertRoleValidator,
  updateRoleValidator,
} from '#validators/role'

export default class RolesController {
  async getRolesById({ request }: HttpContext) {
    await request.validateUsing(getRolesByIdValidator)
    const id = request.param('id')
    const data = await Role.findManyBy({ profileId: id })
    const res = await data.map((row) => {
      const rowData = row.toJSON()
      const { system, ...role } = rowData
      return {
        ...role,
        system_id: system.id,
        system_status: system.status,
        system_name: system.system_name,
      }
    })
    return res
  }

  async insertRoleById({ request, response }: HttpContext) {
    await request.validateUsing(insertRoleValidator)
    const body = request.body()
    const roleExists = await Role.query()
      .where('profile_id', body.profile_id)
      .andWhere('system_id', body.system_id)
    if (roleExists.length > 0) {
      response.safeStatus(500)
      return { message: 'User has this role already' }
    }
    const role = await Role.create(request.body())
    const res = await role.save()
    return res
  }

  async updateRoleById({ request }: HttpContext) {
    await request.validateUsing(updateRoleValidator)
    const { id, access } = request.body()
    const role = await Role.findByOrFail(id)
    const res = await role.merge(access).save()
    return res
  }

  async deleteRoleById({ request }: HttpContext) {
    await request.validateUsing(deleteRoleValidator)
    const { id } = request.body()
    const role = await Role.findByOrFail({ id })
    if (!role) {
      return { message: `No role found with ID: ${id}` }
    }
    const res = await role.delete()
    return res
  }
}
