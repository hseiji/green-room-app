import { createContext, ReactNode, useContext, useState } from 'react'
import { SideSummary } from '../components/SideSummary'
import { useLocalStorage } from '../hooks/useLocalStorage'

type PlantsProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type PlantContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const PlantContext = createContext({} as PlantContext)

export function useShoppingCart() {
  return useContext(PlantContext)
}

export function PlantProvider({ children }: PlantsProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  )
  const [isOpen, setIsOpen] = useState(false)
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  function getItemQuantity(id: number) {
    // return quantity if find item with this id
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      //if item doesn't exist, set qty to 1
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
        //if item exist increase by 1, else return item
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      //if qty equals to 1, remove the item from items
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <PlantContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <SideSummary isOpen={isOpen} />
    </PlantContext.Provider>
  )
}
