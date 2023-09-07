import { Header } from '@/components/Header'
import { CartList } from './CartList'
import { OrderForm } from './OrderForm'

export default function Cart() {
    return (
        <>
            <Header />
            <div className="container grid md:grid-cols-3 py-5 gap-10">
                <CartList />
                <OrderForm />
            </div>
        </>
    )
}
