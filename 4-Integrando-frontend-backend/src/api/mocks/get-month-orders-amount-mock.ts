import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'

/**
 * generic get
 * params
 * bodyRequest
 * bodyResponse
 */
export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', async () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 20,
  })
})
