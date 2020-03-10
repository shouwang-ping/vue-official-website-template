// -- config webpack.config.js；npx webpack 默认访问webpack.config.js这个文件，默认在dist目录下生成main.js可更改为bundle.js；可以设置 更改访问webpack.config.js 这个文件名
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // 默认，内置支持导入.json文件 css, 图片
    rules: [ 
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};