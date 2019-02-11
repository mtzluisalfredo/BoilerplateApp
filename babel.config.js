module.exports = {
  presets: [
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
