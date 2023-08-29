import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export function Featured() {
    return (
        <div className="bg-background text-white py-12">
            <div className="container px-5">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr,0.9fr]">
                    <Column>
                        <div>
                            <h1 className="text-2xl md:text-5xl mb-3">
                                Product Title
                            </h1>
                            <p className="text-[#aaa] text-sm">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptates cum porro vel
                                provident suscipit maxime deleniti obcaecati
                                vero pariatur accusantium eaque minus minima
                                blanditiis, a harum non saepe totam corporis!
                            </p>
                            <div className="flex gap-3 mt-6">
                                <Link
                                    href={'#'}
                                    className="py-1 px-4 rounded-md border border-solid border-white font-medium"
                                >
                                    Leer más
                                </Link>
                                <button className="py-1 px-4 rounded-md cursor-pointer bg-indigo-600">
                                    <FontAwesomeIcon icon={faCartShopping} />{' '}
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <Image
                            className="w-full object-contain"
                            width={2400}
                            height={1332}
                            src="/img/mac_book.png"
                            alt="mac book"
                        />
                    </Column>
                </div>
            </div>
        </div>
    )
}

function Column({ children }: PropsWithChildren) {
    return <div className="flex items-center">{children}</div>
}
