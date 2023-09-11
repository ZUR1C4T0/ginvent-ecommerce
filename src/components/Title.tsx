import { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren) {
    return <h1 className="text-2xl">{children}</h1>
}
