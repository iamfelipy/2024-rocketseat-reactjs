import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Item, cartReducer } from '../reducers/cart/reducer'
import { addItemAction } from '../reducers/cart/actions'

interface CartContextType {
  cart: Item[]
  addItem: (item: Item) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const { cart } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
