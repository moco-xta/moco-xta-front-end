/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin'
/* import path from 'path' */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    })
    return config
  },
  /* sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, */
}

export default withNextIntl(nextConfig)
