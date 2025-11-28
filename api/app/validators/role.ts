import vine from '@vinejs/vine'

export const insertRolesValidator = vine.compile(
  vine.object({
    profile_id: vine.number(),
    roles: vine.array(
      vine.object({
        system: vine.string(),
        access: vine.enum([1, 2, 3]),
      })
    ),
  })
)

export const updateRolesValidator = vine.compile(
  vine.object({
    profile_id: vine.number(),
    roles: vine.array(
      vine.object({
        system: vine.string(),
        access: vine.enum([1, 2, 3]),
      })
    ),
  })
)
