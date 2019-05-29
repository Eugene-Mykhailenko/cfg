const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/css.extract');
const font = require('./webpack/font');
const img = require('./webpack/img');
const js = require('./webpack/babel');
const webpack = require('webpack');

const PATHS = {
  sourse: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      index: PATHS.sourse + '/pages/index/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js?[hash]',
    },
    plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.sourse + '/pages/index/index.pug',
      }),
      new CopyPlugin([{ from: `${PATHS.sourse}/favicon`, to: PATHS.build }]),
    ],
  },
  pug(),
  font(),
  img(),
  js(),
]);

module.exports = function(env) {
  if (env === 'prod') {
    return merge([
      common,
      extractCss(),
    ]);
  }
  if (env === 'dev') {
    return merge([
      {},
      common,
      devServer(),
      sass(),
      css(),
      {
        plugins: [
          new webpack.DefinePlugin({
            API_HOST: JSON.stringify('https://api.smicnl.com'),
            API_TOKEN: JSON.stringify('68eee348f2ab0b08bc806ea90f5f89'),
          }),
        ],
      },
    ]);
  }
};
