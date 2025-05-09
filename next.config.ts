import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['randomuser.me'],
    },
    async rewrites() {
        return [
            {
                source: '/test1/:path*', // Chỉ định rằng nếu đường dẫn bắt đầu với /test1
                destination: '/:path*', // Sẽ chuyển hướng đến URL tương ứng, xóa /test1
            },
        ];
    },
};

export default nextConfig;
