import { http, HttpResponse } from 'msw'

export const signOutMock = http.post<never, never>(
  '/sign-out',
  async () => {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth=; Max-Age=0',
      },
    })
  },
)
