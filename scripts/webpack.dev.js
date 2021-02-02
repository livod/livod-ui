const { merge } = require('webpack-merge')
const base = require('./webpack.common.js')
const path = require("path");
module.exports = merge(base, {
  entry: path.join(__dirname, "../demo/index.tsx"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "demo/index.html",
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map'
})