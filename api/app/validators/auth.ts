import vine from '@vinejs/vine'

export const authLogin = vine.compile(
  vine.object({
    username: vine.string().minLength(1),
    password: vine.string().minLength(1),
  })
)
