import vine from '@vinejs/vine'

export const findSectionByIdValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
  })
)

export const insertSectionValidator = vine.compile(
  vine.object({
    section_name: vine.string().trim().minLength(1),
    section_code: vine.string().trim().minLength(1).maxLength(5),
    division_code: vine.number(),
    status: vine.enum(['A', 'I']).optional(),
  })
)

export const updateSectionValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number(),
    }),
    section_name: vine.string().trim().minLength(1).optional(),
    section_code: vine.string().trim().minLength(1).maxLength(5).optional(),
    division_code: vine.number().optional(),
    status: vine.enum(['A', 'I']).optional(),
  })
)
