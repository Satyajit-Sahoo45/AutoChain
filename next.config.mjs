/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.clerk.com', 'ucarecdn.com'],
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
