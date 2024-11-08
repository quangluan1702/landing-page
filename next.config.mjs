/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // port: '',
        // pathname: '/uploads/**',  // Specify the path if necessary
      }
    ],
  },
};

export default nextConfig;
