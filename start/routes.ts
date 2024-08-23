/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const EventsController = () => import('#controllers/events_controller')
import router from '@adonisjs/core/services/router'
import AuthRouter from '#routers/auth'

router.resource('users', UsersController)
router.resource('events', EventsController)
router.group(AuthRouter).prefix('auth')
router.on('/').renderInertia('home', { version: 6 })
