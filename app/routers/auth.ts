import User from '#models/user'
import router from '@adonisjs/core/services/router'

export default function () {
  router.group(() => {
    router.post('/login', async ({ request, auth }) => {
      const { email, password } = request.only(['email', 'password'])

      const user: User = await User.verifyCredentials(email, password)

      await auth.use('api').login(user)

      // return user
    })
  })
}
