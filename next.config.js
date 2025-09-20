/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/clementvsc.github.io',
  assetPrefix: '/clementvsc.github.io/',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
