import { Product } from '@/context/cart.store'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { AddProductButton } from './AddProductButton'
import { ButtonLink } from './Button'

async function getBetterProduct() {
    const res = await fetch(
        'https://api.mockaroo.com/api/2cd20f00?count=20&key=b76d95a0',
    )
    const products = (await res.json()) as Product[]
    const sortedProducts = products.sort((a, b) => a.rate - b.rate)
    return sortedProducts[0]
}

export async function Featured() {
    const featuredProduct = await getBetterProduct()

    return (
        <div className="bg-background text-white py-12">
            <div className="container px-5">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr,0.9fr]">
                    <Column>
                        <div>
                            <h1 className="text-2xl md:text-5xl mb-3">
                                {featuredProduct.title}
                            </h1>
                            <p className="text-[#aaa] text-sm">
                                {featuredProduct.description}
                            </p>
                            <div className="flex gap-3 mt-6">
                                <ButtonLink
                                    href={`product/${featuredProduct.id}`}
                                    color="white"
                                    outline
                                >
                                    Leer más
                                </ButtonLink>
                                <AddProductButton product={featuredProduct} />
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <Image
                            className="w-full max-h-60 object-contain"
                            width={2400}
                            height={1332}
                            src={featuredProduct.images[0]}
                            alt="mac book"
                        />
                    </Column>
                </div>
            </div>
        </div>
    )
}

function Column({ children }: PropsWithChildren) {
    return <div className="flex items-center">{children}</div>
}
