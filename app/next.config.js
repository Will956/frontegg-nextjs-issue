/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/",
        destination: "http://localhost:4000/",
      },
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
