2019/05/17

## 各npm パッケージについて

こちらを参照
[ABOUT_PACKAGES](/ABOUT_PACKAGES.md)  

## webpack設定について

開発用・本番用で設定ファイルを分けるのが公式推奨だったため分割しました。  
https://webpack.js.org/guides/production/  

webpack.common.jsに基本設定を記述し、`webpack-merge` パッケージを使ってマージ。
npm scriptsのコマンドでどれを読み込むかを指定しています。

```
config/webpack.common.js // 共通
config/webpack.dev.js // 開発用
config/webpack.prod.js // 本番用
```

## babel設定について

[.babelrc](/.babelrc)  

``` json
{
  "env": { /* 開発環境設定  今回はes6、ブラウザ環境と設定 */ },
  "extends": [ /* eslintルールプリセットパッケージ  今回はeslint-preset-airbnb */ ],
  "plugins": [ /* eslintプラグイン  今回はeslintのts用プラグイン */ ],
  "parser": /* 構文解析するパッケージ  今回はts+eslint用 */,
  "parserOptions": { /* 構文解析用の設定 */ },
  "rules": { /* メイン eslint用のルール 今回はプリセットにないもののみ指定 */ },
  "settings": { /* ts用の設定など */ }
  }
}
```

## npm scriptsについて

eslint、prettierはエディタ側の自動保存でやる想定なので入れていません。  
`$ npx eslint ./src/**` などはお好みで登録してください。  
  
[package.json](/package.json)  
  
``` json
"scripts": {
	"start": "webpack-dev-server --config ./config/webpack.dev.js", // ./config/webpack.dev.js でローカルサーバ起動
	"start:prod": "webpack-dev-server --config ./config/webpack.prod.js", // ~prod.js でローカルサーバ起動
	"build": "webpack --config ./config/webpack.dev.js", // 開発用ビルド
	"build:prod": "webpack --config ./webpack.prod.js --mode development" // 本番用ビルド
},
```

### 主な参考資料

* ベース資料 ts + react + webpack環境構築
[https://qiita.com/fisherman3110se/items/918d6ef4244f7b4558ca](https://qiita.com/fisherman3110se/items/918d6ef4244f7b4558ca)  

* @typescript-eslintについて
http://watanabeyu.blogspot.com/2019/02/typescript-eslinttypescriptlinteslintai.html  
https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint  

* vscode用の設定  
https://qiita.com/karak/items/12811d235b0d8bc8ad00#vs-code

* .ts/tsxインポート時に `eslint(import/no-unresolved)` が出る時の対処
https://qiita.com/euxn23/items/e2b9226ab1e02a9b1f20  
https://github.com/alexgorbatchev/eslint-import-resolver-typescript

* tsファイルのimportに失敗する　Module not found: Error: Can't resolve '.tsファイル'
https://stackoverflow.com/questions/43595555/webpack-cant-resolve-typescript-modules

* webpack.config.js分割　本番・開発用
https://qiita.com/teinen_qiita/items/4e828ac30221efb624e1