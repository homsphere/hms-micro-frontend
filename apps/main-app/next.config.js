const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    console.log('rewrites');
    return [
      {
        source: '/sub-app-2',
        destination: 'http://localhost:3002', // Proxy to sub-app-2
      },
      {
        source: '/sub-app-2/:path*',
        destination: 'http://localhost:3002/:path*', // Proxy to sub-app-2
      },
      {
        source: '/sub-app-1/:path*',
        destination: 'http://localhost:3001/:path*', // Proxy to sub-app-1
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
