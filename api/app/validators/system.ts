import vine from '@vinejs/vine'

export const insertSystem = vine.compile(
  vine.object({
    system_name: vine.string().trim().minLength(1),
    status: vine.enum(['A', 'I']).optional(),
  })
)

export const updateSystem = vine.compile(
  vine.object({
    system_name: vine.string().trim().minLength(1).optional(),
    status: vine.enum(['A', 'I']).optional(),
    params: vine.object({
      id: vine.number(),
    }),
  })
)
