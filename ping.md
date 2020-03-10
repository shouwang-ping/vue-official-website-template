# 备注
- npm run build 同于 npx webpack
# package.json
- main.js 发布npm包
- scripts 脚本
- 依赖包
   - webpack-dev-server 一个简单的 web 服务器，并且能够实时重新加载
# webpack.config.js
## devtool
- 控制 是否如何生成 source map
## devServer 开发服务器
## plugins插件
- HtmlWebpackPlugin
- CleanWebpackPlugin
- webpack
   - .NamedModulesPlugin() 方法
   - .HotModuleReplacementPlugin() 方法
## loader
- css
   - css-loader
   - style-loader
- 图片
- 字体
- 数据
   - NodeJS, JSON默认支持
   - CSV, TSV, XML
      - csv-loader
      - xml-loader
# dist 打包目录