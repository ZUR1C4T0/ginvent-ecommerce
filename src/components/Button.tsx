import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface ButtonProps {
    block?: boolean
    color?: 'primary' | 'white' | 'black'
    outline?: boolean
    size?: 'sm' | 'lg'
}

const fixedClasses =
    'rounded-md cursor-pointer inline-flex items-center font-medium gap-1 border-solid justify-center'

function getCustomClasses({ block, color, outline, size }: ButtonProps) {
    let customClasses = []

    if (block) customClasses.push('w-full block')

    if (size === 'lg') customClasses.push('text-xl py-3 px-5')
    else customClasses.push('text-base py-2 px-4')

    if (color === 'primary' && !outline)
        customClasses.push('bg-primary text-white hover:bg-opacity-80')
    else if (color === 'primary' && outline)
        customClasses.push(
            'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
        )
    else if (color === 'white' && !outline)
        customClasses.push('bg-white text-black hover:bg-opacity-80')
    else if (color === 'white' && outline)
        customClasses.push(
            'bg-transparent text-white border border-white hover:bg-white hover:text-black',
        )
    else if (color === 'black' && !outline)
        customClasses.push('bg-black text-white hover:bg-opacity-80')
    else if (color === 'black' && outline)
        customClasses.push(
            'bg-transparent text-black border border-black hover:bg-black hover:text-white',
        )

    return customClasses.join(' ')
}

export function Button({
    children,
    block = false,
    color = 'primary',
    outline = false,
    size = 'sm',
    ...props
}: PropsWithChildren<ButtonProps & HTMLAttributes<HTMLButtonElement>>) {
    const customClasses = getCustomClasses({ block, color, outline, size })

    return (
        <button className={`${fixedClasses} ${customClasses}`} {...props}>
            {children}
        </button>
    )
}

export function ButtonLink({
    children,
    block = false,
    color = 'primary',
    outline = false,
    size = 'sm',
    ...props
}: PropsWithChildren<LinkProps & ButtonProps>) {
    const customClasses = getCustomClasses({ block, color, outline, size })

    return (
        <Link className={`${fixedClasses} ${customClasses}`} {...props}>
            {children}
        </Link>
    )
}
