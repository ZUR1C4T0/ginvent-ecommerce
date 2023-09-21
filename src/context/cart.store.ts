import { create } from 'zustand'

export interface Product {
    id: string
    title: string
    description: string
    price: number
    images: string[]
    rate: number
    createdAt: string
}

interface ProductCuantity {
    cuantity: number
}

interface CartStore {
    products: (Product & ProductCuantity)[],
    total: () => number
    addProduct: (product: Product, cuantity?: number) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
    increace: (id: Product['id']) => void
    decreace: (id: Product['id']) => void
}

export const useCart = create<CartStore>((set, get) => ({
    products: [],
    total: ()=>{
        if(!get()) return 0
        let total = 0
        for (const product of get().products) {
            total += product.price * product.cuantity
        }
        return total
    },
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
