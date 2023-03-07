/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_TEMPLATE_ID: 'template_4vvmjlk',
    NEXT_PUBLIC_SERVICE_ID: 'service_u7y090t',
    NEXT_PUBLIC_EMAIL_KEY: '-z1pNSmUcbwoF26T-'
  }
}

module.exports = {
  ...nextConfig,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}
