module.exports = {
  presets: [
    'react-native',
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env'],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: [
          './src',
        ],
      },
    ],
  ],
};
