const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'url-loader' }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Babel + Webpack, Loaders, Plugins + ESLint',
    template: 'index.html'
  })]
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
//   entry: path.resolve(__dirname, './pruebas/home.js'),
//   output: {
//     filename: '[name].[contenthash].js',
//     path: path.resolve(__dirname, './pruebas/dist')
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, './pruebas/dist'),
//     compress: true,
//     port: 9000,
//     hot: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template:'pruebas/index.html',
//       filename: 'index.html'
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }

