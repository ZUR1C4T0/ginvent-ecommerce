import { PropsWithChildren } from 'react'

export function ProductsGrid({ children }: PropsWithChildren) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {children}
        </div>
    )
}
