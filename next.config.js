/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable GZIP/Brotli compression
    compress: true,

    images: {
        // Modern formats only – WebP + AVIF shrink sizes by 30-60%
        formats: ["image/avif", "image/webp"],
        // Limit image sizes served
        deviceSizes: [640, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 64, 128, 256],
        // Cache optimised images for 60 days
        minimumCacheTTL: 5184000,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "opengraph.githubassets.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
        ],
    },

    // Reduce build output and enable SWC minifier (default in Next 14)
    swcMinify: true,

    // Experimental: package tree-shaking
    experimental: {
        optimizePackageImports: [
            "react-icons",
            "framer-motion",
            "@react-three/fiber",
            "@react-three/drei",
        ],
    },
};

module.exports = nextConfig;
