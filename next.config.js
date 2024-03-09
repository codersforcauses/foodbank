const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'production' ? false : true,
          register: true,
          skipWaiting: true
        }
      }
    ],
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true'
      }
    ]
  ],
  {
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
      ]
    }
  }
)
