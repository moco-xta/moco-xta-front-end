/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin'
/* import path from 'path' */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      type: 'asset/source',
    })
    return config
  },
}

export default withNextIntl(nextConfig)
