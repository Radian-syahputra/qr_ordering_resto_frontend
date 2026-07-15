import { create } from "zustand";
import type { Menu } from "@/types/menu";

interface CartItem {
    menu: Menu
    quantity: number
    note?: string
}

interface CartState {
    items: CartItem[]
    addItem: (cartItem: CartItem) => void
    removeItem: (menuId: string) => void
    updateQuantity: (menuId: string, quantity: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (newItem) => set((state) => {
        const existingItem = state.items.find((item) => item.menu.id === newItem.menu.id)

        if (existingItem) {
            return {
                items: state.items.map((item) =>
                    item.menu.id === newItem.menu.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                )
            }
        } else {
            return {
                items: [...state.items, newItem]
            }
        }
    }),

    removeItem: (menuId) => set((state) => ({
        items: state.items.filter((item) => item.menu.id !== menuId)
    })),

    updateQuantity: (menuId, quantity) => set((state) => ({
        items: state.items.map((item) =>
            item.menu.id === menuId
                ? { ...item, quantity }
                : item
        )
    })),

    clearCart: () => set({ items: [] }),
}))