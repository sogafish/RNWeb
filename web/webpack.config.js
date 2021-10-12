const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDir = path.resolve(__dirname, '../');
const webEntryFileName = 'index.web.ts';
const webOutputFileName = 'bundle.web.js';
const webOutputDirName = 'dist';
const env = process.env.NODE_ENV || 'development'; // todo

// const babelLoaderConfig = {
//   test: /\.(tsx|ts|jsx|js|mjs)$/,
//   include: [
//     path.resolve(appDir, webEntryFileName),
//     path.resolve(appDir, 'src'),
//     path.resolve(appDir, 'node_modules/react-native-uncompiled'),
//   ],
//   use: {
//     loader: 'babel-loader',
//     options: {
//       cacheDirectory: true,
//       presets: ['module:metro-react-native-babel-preset'],
//       plugins: ['react-native'],
//     },
//   },
// };

// const imageLoaderConfig = {
//   test: /\.(gif|jpe?g|png|svg)$/,
//   use: {
//     loader: 'url-loader',
//     options: {
//       name: '[name].[ext]',
//       esModule: false,
//     },
//   },
// };

const tsLoaderConfig = {
  test: /\.(tsx|ts|jsx|js|mjs)$/,
  exclude: ['/node_modules/'],
  loader: 'ts-loader',
  options: {
    compilerOptions: {
      allowJs: true,
      target: 'ES5',
      jsx: 'react',
      outDir: 'webroot',
      lib: ['dom', 'ES2017'],
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
    rules: [tsLoaderConfig],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    alias: { 'react-native': 'react-native-web' },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ],
  },
};
