module.exports = {
  presets: [
    ['@babel/preset-env'],
    'react-native',
    'module:metro-react-native-babel-preset',
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
