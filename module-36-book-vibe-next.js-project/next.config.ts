import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
