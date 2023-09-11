'use client'
import { Product, useCart } from '@/context/cart.store'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'

export function ProductCard({ product }: { product: Product }) {
    const addProduct = useCart((state) => state.addProduct)

    return (
        <div className="m-3">
            <Link
                href={`/product/${product.id}`}
                className="bg-white p-5 text-center flex justify-center items-center rounded-xl"
            >
                <Image
                    height={480}
                    width={480}
                    alt={product.title}
                    src={product.images[0]}
                    className="w-full max-h-[100px] object-contain"
                />
            </Link>
            <div className="mt-2">
                <Link className="text-sm" href={`/product/${product.id}`}>
                    {product.title}
                </Link>
                <div className="items-center justify-between mt-1 md:flex md:gap-1">
                    <div className="text-right md:text-lg md:font-semibold md:text-left">
                        ${product.price}
                    </div>
                    <Button outline onClick={() => addProduct(product)}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            height={16}
                            className="mr-2"
                        />
                        Agregar
                    </Button>
                </div>
            </div>
        </div>
    )
}
