import User from '#models/user'
import { DateTime, LocaleOptions } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

interface Coordinates {
  lat: number
  lng: number
}

interface Location {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  coords: Coordinates
}

interface EventDate {
  startsAt: DateTime
  endsAt: DateTime
  location: Location
}

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare eventDates: EventDate[]

  @column()
  declare categories: number[]

  @column()
  declare isFree: boolean

  @column()
  declare isOnline: boolean

  @column()
  declare url: string

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
