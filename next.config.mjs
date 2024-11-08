/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  images: {
    domains: ['4-create-langding-api.preview.cms.devplus.edu.vn'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4-create-langding-api.preview.cms.devplus.edu.vn", // Add this hostname
        pathname: "/uploads/**", // Specify the path pattern
      }
    ],
  },
};

export default nextConfig;
