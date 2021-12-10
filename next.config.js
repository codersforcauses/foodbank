module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: false
  },
  // need to remove once test is deleted
  images: {
    domains: ['images.unsplash.com', 'tinyurl.com']
  }
}
