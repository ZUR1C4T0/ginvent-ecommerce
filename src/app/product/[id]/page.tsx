import { AddProductButton } from '@/components/AddProductButton'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { Product } from '@/context/cart.store'
import Image from 'next/image'
import { ProductImages } from './ProductImages'

async function getProductById(id: string) {
    const res = await fetch(
        'https://api.mockaroo.com/api/2cd20f00?count=20&key=b76d95a0',
    )
    const products = (await res.json()) as Product[]
    return products.find((product) => product.id === id)
}

export default async function Product({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id)

    return (
        <>
            <Header />
            <div className="container grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-10 my-10">
                <ProductImages images={product!.images} />

                <div>
                    <Title>{product?.title}</Title>
                    <p className="mb-3">{product?.description}</p>
                    <div className="flex gap-5 items-center">
                        <div>
                            <span className="text-2xl">$ {product?.price}</span>
                        </div>
                        <div>
                            <AddProductButton product={product!} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
