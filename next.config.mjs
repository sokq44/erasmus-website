/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "3000",
            pathname: "/companies-images/**",
          },
          {
            protocol: "https",
            hostname: "erasmus-website.vercel.app",
            port: "",
            pathname: "/companies-images/**",
          },
        ],
      },
};

export default nextConfig;
