/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Safari compatibility
  transpilePackages: ['ogl'],
  compiler: {
    // Ensure proper transpilation for Safari
    removeConsole: false,
  },
  experimental: {
    // Disable problematic optimizations for Safari
    forceSwcTransforms: false,
  },
  // Webpack config for better Safari compatibility
  webpack: (config, { dev, isServer }) => {
    // Add support for WebGL libraries in Safari
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    return config
  },
}

export default nextConfig
