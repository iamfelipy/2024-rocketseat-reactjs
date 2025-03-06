import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

/**
 * generic get
 * params
 * bodyRequest
 * bodyResponse
 */
export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
