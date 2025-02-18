import bundleAnalyzer from "@next/bundle-analyzer";
import CompressionPlugin from "compression-webpack-plugin";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // Optimize images
  images: {
    domains: ["desireuniforms.in"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.cache = {
      type: "filesystem",
      maxAge: 60 * 60 * 1000,
    };
    // Enable tree shaking
    config.optimization.usedExports = true;
    config.optimization.minimize = true;
    config.plugins.push(
      new CompressionPlugin({
        algorithm: "gzip",
        threshold: 10240, // Compress files > 10KB
      })
    );
    config.optimization.minimize = true;
    config.optimization.moduleIds = "deterministic";

    // Split chunks optimization
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 10000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
