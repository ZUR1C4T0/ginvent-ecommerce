import { Product } from '@/context/cart.store'
import { ProductCard } from './ProductCard'
import { ProductsGrid } from './ProductsGrid'

export function NewProducts({ products }: { products: Product[] }) {
    return (
        <div className="container px-3">
            <h2 className="text-3xl my-6">Nuevos Productos</h2>
            <ProductsGrid>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </ProductsGrid>
        </div>
    )
}
