const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Todo App',
        filename: './index.html'
    })
  ],
};