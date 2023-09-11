import { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren) {
    return <h1 className="text-2xl mb-3">{children}</h1>
}
