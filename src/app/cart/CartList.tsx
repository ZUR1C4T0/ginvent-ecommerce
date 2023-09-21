'use client'
import { Button } from '@/components/Button'
import { ProductRow } from '@/components/product/ProductRow'
import { useCart } from '@/context/cart.store'
import { CartCard } from './CartCard'

export function CartList() {
    const { products, total, clearCart } = useCart()

    return (
        <CartCard
            title="Carrito"
            className="md:col-span-2 bg-white p-5 rounded-xl"
        >
            {products.length === 0 ? (
                <div className="text-2xl font-bold text-center">
                    Tu carrio está vacío
                </div>
            ) : (
                <table className="w-full">
                    <thead className="border-b border-solid text-left text-black/50">
                        <tr>
                            <th>PRODUCTO</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductRow key={product.id} product={product} />
                        ))}
                        <tr>
                            <td>
                                <Button
                                    color="black"
                                    onClick={() => clearCart()}
                                >
                                    Limpiar carrito
                                </Button>
                            </td>
                            <td className="text-2xl uppercase">Total</td>
                            <td className="text-2xl font-bold">$ {total()}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </CartCard>
    )
}
