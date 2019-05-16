const merge = require('webpack-merge'); // webpack-merge
const common = require('./webpack.common.js'); // 汎用設定をインポート

module.exports = merge(common, {
  // 開発用設定
  mode: 'production',
  devtool: 'source-map', // 開発用ソースマップ
});
