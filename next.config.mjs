/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "/public/images/:path*",
      },
    ];
  },
};

export default nextConfig;
