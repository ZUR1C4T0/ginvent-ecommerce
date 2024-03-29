import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import './globals.css'

const roboto = Roboto({
    weight: ['400', '100', '300', '500', '700', '900'],
    display: 'swap',
    preload: true,
    subsets: ['latin'],
    fallback: ['sans-serif'],
})

export const metadata: Metadata = {
    title: 'Ginvent - Ecommerce',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="es">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
