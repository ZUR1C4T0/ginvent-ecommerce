import { Product } from '@/context/cart.store'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="p-5">
            <Link
                href={`/product/${product.id}`}
                className="bg-white text-center flex justify-center items-center rounded-lg"
            >
                <Image
                    height={100}
                    width={100}
                    alt={product.title}
                    src={product.images[0]}
                    className="w-full max-h-20 object-cover"
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
                    <Button outline>
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
