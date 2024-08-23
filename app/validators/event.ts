import vine from '@vinejs/vine'

export const createEventValidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string(),
    eventDates: vine
      .array(
        vine.object({
          startsAt: vine.date(),
          endsAt: vine.date().afterField('startsAt', {
            compare: 'minutes',
          }),
          location: vine.object({
            addressLine1: vine.string(),
            addressLine2: vine.string().optional(),
            city: vine.string(),
            state: vine.string(),
            zip: vine.string(),
            coords: vine.object({
              lat: vine.number(),
              lng: vine.number(),
            }),
          }),
        })
      )
      .notEmpty(),
    categories: vine.array(vine.number()),
    isFree: vine.boolean(),
    isOnline: vine.boolean(),
    url: vine.string().url(),
    userId: vine.number(),
  })
)

export const updateEventValidator = vine.compile(
  vine.object({
    title: vine.string().optional(),
    description: vine.string().optional(),
    eventDates: vine
      .array(
        vine.object({
          startsAt: vine.date(),
          endsAt: vine.date().afterField('startsAt', {
            compare: 'minutes',
          }),
          location: vine.object({
            addressLine1: vine.string(),
            addressLine2: vine.string().optional(),
            city: vine.string(),
            state: vine.string(),
            zip: vine.string(),
            coords: vine.object({
              lat: vine.number(),
              lng: vine.number(),
            }),
          }),
        })
      )
      .optional(),
    categories: vine.array(vine.number()).optional(),
    isFree: vine.boolean().optional(),
    isOnline: vine.boolean().optional(),
    url: vine.string().url().optional(),
    userId: vine.number().optional(),
  })
)
