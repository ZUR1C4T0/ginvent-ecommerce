'use client'
import { Product, useCart } from '@/context/cart.store'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './Button'

export function AddProductButton({ product }: { product: Product }) {
    const addProduct = useCart((state) => state.addProduct)

    return (
        <Button color="white" onClick={() => addProduct(product)}>
            <FontAwesomeIcon
                icon={faCartShopping}
                height={16}
                className="mr-2"
            />
            Agregar
        </Button>
    )
}
