import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import { createEventValidator, updateEventValidator } from '#validators/event'

export default class EventsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Event.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, logger }: HttpContext) {
    const eventData = await request.validateUsing(createEventValidator)
    return await Event.create(eventData)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const { id } = params
    const update = await request.validateUsing(updateEventValidator)
    return await Event.updateOrCreate({ id }, update)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const { id } = params
    const eventToDelete = await Event.find(id)
    return await eventToDelete?.delete()
  }
}
