import { create } from 'zustand'

export interface Product {
    id: string
    title: string
    description: string
    price: number
    images: string[]
}

interface CartStore {
    products: Product[]
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

export const useCart = create<CartStore>((set) => ({
    products: [],
    addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
    removeProduct: (product) =>
        set((state) => ({
            products: state.products.filter((p) => p.id !== product.id),
        })),
    clearCart: () => set({ products: [] }),
}))
