const path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index',
    output: {
        filename: 'ad.js'
    },
    resolve: {
        extensions: ['.ts']
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
                test: /\.ts?/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}