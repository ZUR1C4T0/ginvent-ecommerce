import { Featured } from '@/components/Featured'
import { Header } from '@/components/Header'
import { NewProducts } from '@/components/product/NewProducts'

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

export default function Home() {
    return (
        <div className="bg-neutral-300 min-h-screen">
            <Header />
            <Featured /> {/*product={featuredProduct}*/}
            <NewProducts products={products} />
        </div>
    )
}
