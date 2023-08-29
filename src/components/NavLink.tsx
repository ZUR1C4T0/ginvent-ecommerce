import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

export function NavLink({
    href,
    children,
    ...linkProps
}: PropsWithChildren<LinkProps>) {
    return (
        <Link
            href={href}
            className="block text-[#aaa] hover:text-white py-2 md:p-0"
            {...linkProps}
        >
            {children}
        </Link>
    )
}
