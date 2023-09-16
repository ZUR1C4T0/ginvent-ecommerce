/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['dawid-next-ecommerce.s3.amazonaws.com', 'dummyimage.com'],
    },
}

module.exports = nextConfig
