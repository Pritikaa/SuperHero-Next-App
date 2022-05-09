/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://pritika:pritika16@cluster0.sqxlx.mongodb.net/SuperHero?retryWrites=true&w=majority"
  }
}
