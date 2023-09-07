import { Header } from '@/components/Header'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductsGrid } from '@/components/product/ProductsGrid'

const products = [
    {
        id: 'f7e3e646-647d-4cb1-ac46-40836709c3e5',
        title: 'Product 1',
        description: 'Description 1',
        price: 100,
        images: ['https://placehold.co/100/png'],
    },
    {
        id: 'f7e3e646-647d-4cb1-ac46-40836709c3e7',
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
        images: ['https://placehold.co/100/png'],
    },
    {
        id: 'f7e3e646-647d-4cb1-ac46-40836709c3e8',
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
        images: ['https://placehold.co/100/png'],
    },
    {
        id: 'f7e3e646-647d-4cb1-ac46-40836709c3e9',
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
        images: ['https://placehold.co/100/png'],
    },
]

export default function Products() {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="text-2xl my-3">Todos los productos</h1>
                <ProductsGrid>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ProductsGrid>
            </div>
        </>
    )
}
