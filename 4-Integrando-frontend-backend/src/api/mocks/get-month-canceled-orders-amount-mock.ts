import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

/**
 * generic get
 * params
 * bodyRequest
 * bodyResponse
 */
export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', async () => {
  return HttpResponse.json({
    amount: 50,
    diffFromLastMonth: 10,
  })
})
