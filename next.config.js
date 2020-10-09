const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer();

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

const withWorkbox = require('next-with-workbox');
module.exports = withWorkbox({
  workbox: {
    // .
    // ..
    // ... any workbox-webpack-plugin.GenerateSW option
  },
  // .
  // ..
  // ... other Next.js config values
});

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./pages/scripts/generate-sitemap');
    } else {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

const withImages = require('next-images');
module.exports = withImages({});
