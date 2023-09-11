import { Product } from '@/context/cart.store'
import { ProductCard } from './ProductCard'
import { ProductsGrid } from './ProductsGrid'

const getLatestProducts = async () => {
    const res = await fetch(
        'https://api.mockaroo.com/api/2cd20f00?count=20&key=b76d95a0',
    )
    const products = (await res.json()) as Product[]
    // Sort by createdAt descending
    const sortedProducts = products.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    return sortedProducts.slice(0, 10)
}

export async function NewProducts() {
    const products = await getLatestProducts()

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
