/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cms-ecwabirmingham.onrender.com", "cms-ecwabirmingham.onrender.com/uploads", "localhost", "127.0.0.1", "res.cloudinary.com"],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
