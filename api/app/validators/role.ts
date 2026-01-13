import vine from '@vinejs/vine'

export const getRolesByIdValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
  })
)

export const insertRoleValidator = vine.compile(
  vine.object({
    profile_id: vine.number(),
    system_id: vine.number(),
    access: vine.enum([1, 2, 3]),
  })
)

export const updateRoleValidator = vine.compile(
  vine.object({
    id: vine.number(),
    access: vine.enum([1, 2, 3]),
  })
)

export const deleteRoleValidator = vine.compile(
  vine.object({
    id: vine.number(),
  })
)
