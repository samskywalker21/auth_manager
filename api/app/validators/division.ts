import vine from '@vinejs/vine'

export const findDivisionByIdValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
  })
)

export const insertDivisionValidator = vine.compile(
  vine.object({
    division_name: vine.string().trim().minLength(1),
    division_code: vine.string().trim().minLength(1).maxLength(5),
    status: vine.enum(['A', 'I']).optional(),
  })
)

export const updateDivisionValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
    division_name: vine.string().trim().minLength(1).optional(),
    division_code: vine.string().trim().minLength(1).maxLength(5).optional(),
    status: vine.string().trim().minLength(1).maxLength(1).optional(),
  })
)
