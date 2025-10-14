import vine from '@vinejs/vine'

export const findProfileByIdValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
  })
)

export const insertProfileValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim().minLength(1).maxLength(30),
    middle_name: vine.string().trim().minLength(1).maxLength(30).optional(),
    last_name: vine.string().trim().minLength(1).maxLength(30),
    position: vine.string().trim().minLength(1).maxLength(100),
    username: vine.string().trim().minLength(1).maxLength(30),
    password: vine.string().trim().minLength(1),
    status: vine.enum(['A', 'I']).optional(),
    is_admin: vine.boolean().optional(),
    section_id: vine.number(),
  })
)

export const updateProfileValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim().minLength(1).maxLength(30).optional(),
    middle_name: vine.string().trim().minLength(1).maxLength(30).optional(),
    last_name: vine.string().trim().minLength(1).maxLength(30).optional(),
    position: vine.string().trim().minLength(1).maxLength(100).optional(),
    username: vine.string().trim().minLength(1).maxLength(30).optional(),
    password: vine.string().trim().minLength(1).optional(),
    status: vine.enum(['A', 'I']).optional(),
    is_admin: vine.boolean().optional(),
    section_id: vine.number().optional(),
    params: vine.object({
      id: vine.number(),
    }),
  })
)
