const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
// 配置 导出Promise 异步地加载所需的配置变量 
// 导出多个对象 module.exports: [{}, {}]
module.exports = {
    mode: "development",
    // context: path.resolve(__dirname, './'), // 入口和上下文
    entry: './src/ping',
    output: {
        filename: 'ping.js'
    },
    resolve: { // 解析
        extensions: ['.vue', '.ts', '.js'], // 出现较多的文件写在前面 利于搜索
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { // .babelrc 文件
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "browsers": ["last 2 versions"]
                                    }
                                }
                            ]
                        ],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: { // 开发服务
      hot: true,
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: { // 保证 刷新页面不会404
        index: 'index.html'
      },
    //   compress: true // 开启Gzip压缩
      port: 9000,
      open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ // 配置第三方库
            $https: 'axios' // 在.vue文件中可以使用$http发送请求，不用每次都import Axios from 'axios';也不用挂载到vue原型链上
        })
    ],
    // devtool: { // 如何生成map

    // },
    // performance: { // 性能评估

    // },
    // externals: { // 外部扩展
    //   jquery: 'jQuery'
    // },
    // watch: false, // 监听文件变换 编译 默认false
    // watchOptions: {
      
    // },
    // targets: { // 编译目标
        
    // },
    // node: { // 过滤，不打包node自身模块

    // },
    // // 其他
    // stats: { // 统计信息

    // },
    // cache: "" // 缓存
}