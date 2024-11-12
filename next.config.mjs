/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['https://4-create-langding-api.preview.cms.devplus.edu.vn/api/landing-activities?populate=*'],
  },
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
