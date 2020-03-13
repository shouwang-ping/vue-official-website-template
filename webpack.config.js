const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: "development",
    entry: './src/index',
    output: {
        // filename: 'p-bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 采用 runtime模式 运行时版本
        }
    },
    devServer: {
      historyApiFallback: {
        rewrites: [
          { from: /.*/, to: path.posix.join('static', 'index.html') },
        ],
      },
      contentBase: false
    },
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
            },
            {
                test: /\.(j | t)s?/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
}