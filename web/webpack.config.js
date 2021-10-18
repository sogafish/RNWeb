const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDir = path.resolve(__dirname, '../');
const webEntryFileName = 'index.web.ts';
const webOutputFileName = 'bundle.web.js';
const webOutputDirName = 'dist';
const env = process.env.NODE_ENV || 'development';

const babelLoaderConfig = {
  test: /\.(tsx|ts|jsx|js|mjs|json)$/,
  include: [
    path.resolve(appDir, webEntryFileName),
    path.resolve(appDir, 'src'),
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
  entry: [path.resolve(appDir, webEntryFileName)],

  output: {
    filename: webOutputFileName,
    path: path.resolve(appDir, webOutputDirName),
  },

  module: {
    rules: [babelLoaderConfig, imageLoaderConfig],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

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
