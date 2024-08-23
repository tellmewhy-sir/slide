import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await User.all()
  }

  /**
   * Display form to create a new record
   */
  async create({ request }: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, logger }: HttpContext) {
    const userData = await request.validateUsing(createUserValidator)
    return await User.create(userData)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await User.findOrFail(params.id)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.body()
    user.merge(data)
    await user.save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return user
  }
}
