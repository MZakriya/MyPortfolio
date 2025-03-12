import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "randomuser.me"], 
  },
};

export default nextConfig;
