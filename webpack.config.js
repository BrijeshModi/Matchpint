var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './app/index.js',
 output:{
  path: path.resolve(__dirname,'dist'),
  filename: 'index_bundle.js'
 },
 module:{
  rules: [
   {test: /\.(js|jsx)$/,use:'babel-loader'},
   {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']}
  ]
 },
 mode:'development',
 plugins: [
  new HtmlWebpackPlugin({
   template: 'app/index.html'
  })
 ]
};