/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1', // Only the IP address here
          port: '1337',          // Specify the port separately
          pathname: '/uploads/**', // Path without leading or trailing slashes
        },
      ],
    },
};

export default nextConfig;
