//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { APP1_URL, APP2_URL } = process.env;

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
    return [
      {
        source: '/app1',
        destination: `${APP1_URL}/app1`,
      },
      {
        source: '/app1/:path*',
        destination: `${APP1_URL}/app1/:path*`,
      },
      {
        source: '/app2',
        destination: `${APP2_URL}/app2`,
      },
      {
        source: '/app2/:path*',
        destination: `${APP2_URL}/app2/:path*`,
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
