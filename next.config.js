module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
  experimental: { images: { layoutRaw: true } },
}
