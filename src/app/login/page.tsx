import { Header } from '@/components/Header'
import { CartCard } from '../cart/CartCard'
import LoginForm from './LoginForm'

export default function Login() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow grid place-content-center">
                <CartCard>
                    <LoginForm />
                </CartCard>
            </div>
        </div>
    )
}
