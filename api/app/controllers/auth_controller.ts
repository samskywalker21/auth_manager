import type { HttpContext } from '@adonisjs/core/http'
import Profile from '#models/profile'
import { authLogin } from '#validators/auth'

export default class AuthController {
  async login({ request }: HttpContext) {
    await request.validateUsing(authLogin)
    const { username, password } = request.body()
    const user = await Profile.verifyCredentials(username, password)
    const token = await Profile.accessTokens.create(user)

    return { access_token: token.value?.release() }
  }

  async logout({ auth }: HttpContext) {
    await auth.use('api').invalidateToken()
    return { message: 'Logout successful' }
  }
}
