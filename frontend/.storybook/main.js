module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.fallback,
          crypto: require.resolve('crypto-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          path: require.resolve('path-browserify'),
          stream: require.resolve('stream-browserify'),
        },
      },
    };
  },
};
