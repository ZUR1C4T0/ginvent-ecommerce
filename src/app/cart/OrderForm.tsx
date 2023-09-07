import { Button } from '@/components/Button'
import { InputHTMLAttributes } from 'react'
import { CartCard } from './CartCard'

export function OrderForm() {
    return (
        <div>
            <CartCard title="Información de la Orden">
                <form className="grid">
                    <Input type="text" placeholder="Nombre" />
                    <Input type="email" placeholder="Correo" />
                    <Input type="text" placeholder="Ciudad" />
                    <Input type="number" placeholder="Código Postal" />
                    <Input type="text" placeholder="Dirección" />
                    <Button color="black" block>
                        Ir a Pagar
                    </Button>
                </form>
            </CartCard>
        </div>
    )
}

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={
                'w-full p-2 rounded-lg outline-none border-2 border-solid border-black mb-3 ' +
                className
            }
            {...props}
        />
    )
}
