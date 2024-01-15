/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acme/ui', 'lodash-es'],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        // serverActions: true,
    },
}

module.exports = nextConfig
