const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// next.confg.js

const withPWA  = require("next-pwa");
module.exports = withPWA({
 //...before
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  //...after
});

module.exports = withBundleAnalyzer({
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
      's3.us-west-2.amazonaws.com'
    ]
  }
})
