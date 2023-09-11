import { Featured } from '@/components/Featured'
import { Header } from '@/components/Header'
import { NewProducts } from '@/components/product/NewProducts'

export default function Home() {
    return (
        <>
            <Header />
            <Featured />
            <NewProducts />
        </>
    )
}
