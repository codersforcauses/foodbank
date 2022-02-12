module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  // need to remove once test is deleted
  images: {
    domains: ['images.unsplash.com', 'tinyurl.com', 'img.youtube.com']
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({})
