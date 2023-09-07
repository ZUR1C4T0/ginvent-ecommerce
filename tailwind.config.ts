import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1.25rem',
            },
            colors: {
                background: '#222',
                primary: '#0D3D29',
            },
        },
    },
    plugins: [],
}
export default config
