import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    formats: ['image/webp'],
  },
}

export default nextConfig