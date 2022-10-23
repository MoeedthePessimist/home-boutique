/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/customer/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
