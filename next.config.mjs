/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4-create-langding-api.preview.cms.devplus.edu.vn",
        port: "",
        pathname: "/uploads/**", // Adjust the path if needed
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
