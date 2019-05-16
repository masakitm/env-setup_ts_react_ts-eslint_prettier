const merge = require('webpack-merge'); // webpack-merge
const common = require('./webpack.common.js'); // 汎用設定をインポート

module.exports = merge(common, {
  // 本番用設定
  mode: 'production',
});
