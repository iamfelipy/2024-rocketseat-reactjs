import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

/**
 * generic get
 * params
 * bodyRequest
 * bodyResponse
 */
export const updateProfileMock = http.put<never, UpdateProfileBody, never>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
