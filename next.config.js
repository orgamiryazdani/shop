/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*', // درخواست‌های با پیشوند /api را پروکسی کن
                destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
