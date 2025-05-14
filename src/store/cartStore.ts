import { create } from 'zustand'

export type CartItem = { id: string; name: string; price: number; quantity: number }

export const useCartStore = create<{
    cart: CartItem[]
    totalItems: number
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    clearCart: () => void
}>(set => ({
    cart: [],
    totalItems: 0,
    addItem: item =>
        set(s => {
            const exists = s.cart.find(i => i.id === item.id)
            const cart = exists
                ? s.cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)
                : [...s.cart, item]
            return { cart, totalItems: cart.reduce((sum, i) => sum + i.quantity, 0) }
        }),
    removeItem: id =>
        set(s => {
            const cart = s.cart.filter(i => i.id !== id)
            return { cart, totalItems: cart.reduce((sum, i) => sum + i.quantity, 0) }
        }),
    clearCart: () => set({ cart: [], totalItems: 0 }),
}))
