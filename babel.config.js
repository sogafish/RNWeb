module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.ios.js',
          '.ios.tsx',
          '.android.js',
          '.android.tsx',
          '.web.js',
          '.web.tsx',
        ],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
