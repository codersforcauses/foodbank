const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'production' ? false : true,
  register: true,
  skipWaiting: true
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  // need to remove once test is deleted
  images: {
    domains: [
      'images.unsplash.com',
      'tinyurl.com',
      'img.youtube.com',
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ],
    unoptimized: true
  }
}

module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), config)
}
