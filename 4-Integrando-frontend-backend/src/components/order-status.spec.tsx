import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status="pending" />)
    // util para exibir o dom no terminal e achar um erro
    // wrapper.debug()

    const statusText = wrapper.getByText('Pendente')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')
    // console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })
  it('should display the right text when order status is canceled', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />)
    // util para exibir o dom no terminal e achar um erro
    // wrapper.debug()

    const statusText = wrapper.getByText('Cancelado')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')
    // console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
  it('should display the right text when order status is delivered', () => {
    /* Delivered */
    const wrapper = render(<OrderStatus status="delivered" />)
    // util para exibir o dom no terminal e achar um erro
    // wrapper.debug()

    const statusText = wrapper.getByText('Entregue')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')
    // console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
  it('should display the right text when order status is processing', () => {
    /* Processing */
    const wrapper = render(<OrderStatus status="processing" />)
    // util para exibir o dom no terminal e achar um erro
    // wrapper.debug()

    const statusText = wrapper.getByText('Em preparo')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')
    // console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text when order status is delivering', () => {
    /* Delivering */
    const wrapper = render(<OrderStatus status="delivering" />)
    // util para exibir o dom no terminal e achar um erro
    // wrapper.debug()

    const statusText = wrapper.getByText('Em entrega')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')
    // console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})
