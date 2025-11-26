import type { HttpContext } from '@adonisjs/core/http'
import { Secret } from '@adonisjs/core/helpers'
import Profile from '#models/profile'
import { authLogin, verifyToken } from '#validators/auth'

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

  async getProfile({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return user
  }

  async validateToken({ request }: HttpContext) {
    await request.validateUsing(verifyToken)
    const token = new Secret(request.body().token)
    const res = await Profile.accessTokens.verify(token)
    if (!res) {
      return false
    }
    return true
  }

  async isAdmin({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return user.isAdmin
  }
}
