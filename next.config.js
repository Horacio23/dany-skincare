/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/linktree',
        destination: 'https://linktr.ee/legendaryfitnessmiami',
        permanent: true,
      },
      {
        source: '/',
        destination: '/daniskincare/feedback/create',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
