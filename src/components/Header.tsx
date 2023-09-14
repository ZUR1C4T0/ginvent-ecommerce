'use client'
import { useCart } from '@/context/cart.store'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from './NavLink'

export function Header() {
    const [navActive, setNavActive] = useState(false)
    const count = useCart((state) => state.products.length)

    return (
        <header className="bg-background">
            <div className="container flex justify-between p-5">
                <Link href={'/'} className="text-white text-2xl font-bold">
                    Ginvent
                </Link>
                <nav
                    className={`${
                        navActive ? 'block' : 'hidden'
                    } gap-4 z-10 fixed top-0 bottom-0 left-0 right-0 pt-16 px-5 pb-5 bg-background md:flex md:static md:p-0`}
                >
                    <NavLink href={'/'}>Inicio</NavLink>
                    <NavLink href={'/products'}>Productos</NavLink>
                    <NavLink href={'/categories'}>Categorias</NavLink>
                    <NavLink href={'/account'}>Cuenta</NavLink>
                    <NavLink href={'/cart'}>Carrito ( {count} )</NavLink>
                </nav>
                <button
                    className="bg-transparent aspect-square text-2xl text-white cursor-pointer relative z-10 md:hidden"
                    onClick={() => setNavActive((pev) => !pev)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    )
}
