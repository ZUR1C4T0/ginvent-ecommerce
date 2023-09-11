import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductsGrid } from '@/components/product/ProductsGrid'
import { Product } from '@/context/cart.store'

async function getProducts(): Promise<Product[]> {
    const res = await fetch(
        'https://api.mockaroo.com/api/2cd20f00?count=20&key=b76d95a0',
    )

    if (!res.ok) throw new Error('Error al obtener los productos')

    return await res.json()
}

export default async function Products() {
    const products = await getProducts()

    return (
        <>
            <Header />
            <div className="container">
                <Title>Todos los productos</Title>
                <ProductsGrid>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ProductsGrid>
            </div>
        </>
    )
}
