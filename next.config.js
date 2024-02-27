/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acme/ui', 'lodash-es'],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        // serverActions: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home/products',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig