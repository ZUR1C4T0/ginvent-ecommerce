import { Product, useCart } from '@/context/cart.store'
import Image from 'next/image'

interface ProductRowProps {
    product: Product
}

export function ProductRow({ product }: ProductRowProps) {
    const { products, increace, decreace } = useCart()
    const cuantity = products.find((p) => p.id === product.id)?.cuantity ?? 0

    return (
        <tr>
            <td className="py-3">
                <div className="h-[100px] w-[100px] p-1 border border-solid border-black/10 flex items-center justify-center rounded-xl md:p-3">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="max-w-[60px] max-h-[60px] md:max-w-[80px] md:max-h-[80px]"
                    />
                </div>
                <div>{product.title}</div>
            </td>
            <td>
                <div className="flex items-center gap-1 sm:gap-3">
                    <button
                        className="px-2 rounded-md bg-neutral-300 aspect-square"
                        onClick={() => cuantity > 0 && decreace(product.id)}
                    >
                        -
                    </button>
                    {cuantity}
                    <button
                        className="px-2 rounded-md bg-neutral-300 aspect-square"
                        onClick={() => increace(product.id)}
                    >
                        +
                    </button>
                </div>
            </td>
            <td>${product.price * cuantity}</td>
        </tr>
    )
}
