import { PropsWithChildren } from 'react'

interface CartCardProps {
    title?: string
    className?: string
}

export function CartCard({
    children,
    className,
    title,
}: PropsWithChildren<CartCardProps>) {
    return (
        <div className="md:first-of-type:col-span-2 bg-white p-5 rounded-xl sticky top-5">
            {title && <h2 className="text-2xl my-5 font-semibold">{title}</h2>}
            {children}
        </div>
    )
}
