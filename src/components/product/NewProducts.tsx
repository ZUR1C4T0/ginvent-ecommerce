import { Product, ProductCard } from './ProductCard'

export function NewProducts({ products }: { products: Product[] }) {
    return (
        <div className="container px-3">
            <h2 className="text-3xl my-6">Nuevos Productos</h2>
            <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </div>
    )
}
