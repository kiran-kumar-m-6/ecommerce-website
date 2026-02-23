/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.0.11:3000"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cdn.europe-west1.gcp.commercetools.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
