import { create } from 'zustand'

export interface Product {
    id: string
    title: string
    description: string
    price: number
    images: string[]
}

interface ProductCuantity {
    cuantity: number
}

interface CartStore {
    products: (Product & ProductCuantity)[]
    addProduct: (product: Product, cuantity: number) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
    increace: (id: Product['id']) => void
    decreace: (id: Product['id']) => void
}

export const useCart = create<CartStore>((set) => ({
    products: [],
    addProduct: (product, cuantity = 1) =>
        set((state) => {
            const index = state.products.findIndex((p) => p.id === product.id)
            if (index !== -1) {
                state.products[index].cuantity += cuantity
                return { products: state.products }
            }
            return { products: [...state.products, { ...product, cuantity }] }
        }),

    increace: (id) =>
        set(({ products }) => ({
            products: products.map((p) =>
                p.id === id ? { ...p, cuantity: p.cuantity + 1 } : { ...p },
            ),
        })),

    decreace: (id) =>
        set(({ products }) => ({
            products: products.map((p) =>
                p.id === id ? { ...p, cuantity: p.cuantity - 1 } : { ...p },
            ),
        })),

    removeProduct: (product) =>
        set((state) => ({
            products: state.products.filter((p) => p.id !== product.id),
        })),

    clearCart: () => set({ products: [] }),
}))
