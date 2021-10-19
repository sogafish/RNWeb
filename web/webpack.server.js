const path = require('path');
const nodeExternals = require('webpack-node-externals');

const appDir = path.resolve(__dirname, '../');
const webEntryFileName = 'web/server/index.ts';
const webOutputFileName = 'server.js';
const webOutputDirName = 'build';
const env = process.env.NODE_ENV || 'development';

const babelLoaderConfig = {
  test: /\.(tsx|ts|jsx|js|mjs|json)$/,
  include: [
    path.resolve(appDir, webEntryFileName),
    path.resolve(appDir, 'src'),
    path.resolve(appDir, 'web'),
    // path.resolve(appDir, 'node_modules/react-native-uncompiled'),
  ],
  exclude: [path.resolve(appDir, 'node_modules/')],
  use: {
    loader: 'babel-loader',
    options: {
      plugins: ['react-native-web'],
      presets: [
        'module:metro-react-native-babel-preset',
        '@babel/preset-typescript',
      ],
    },
  },
};

const imageLoaderConfig = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  mode: env,
  entry: path.resolve(appDir, webEntryFileName),
  target: 'node',
  externals: [nodeExternals()],

  output: {
    filename: webOutputFileName,
    path: path.resolve(appDir, webOutputDirName),
  },

  module: {
    rules: [babelLoaderConfig, imageLoaderConfig],
  },

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@screens': path.resolve(__dirname, '../src/screens'),
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
      '.json',
    ],
  },
};
