//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main-app',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          subApp1: 'subApp1@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          subApp2: 'subApp2@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        extraOptions: {},
        exposes: {},
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      }),
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

/*
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main-app',
        remotes: {
          app1: '@hms/app1@http://localhost:3001/_next/static/remoteEntry.js',
          app2: '@hms/app2@http://localhost:3002/_next/static/remoteEntry.js',
        },
        extraOptions: {},
        exposes: {},
        shared: {},
      }),
    );

    return config;
  },
*/
