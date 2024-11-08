/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['4-create-langding-api.preview.cms.devplus.edu.vn'],
  },
  // images: {
    
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //       // port: '',
  //       // pathname: '/uploads/**',  // Specify the path if necessary
  //     }
  //   ],
  // },
};

export default nextConfig;
