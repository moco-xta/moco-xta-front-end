/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin'
/* import path from 'path' */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)
