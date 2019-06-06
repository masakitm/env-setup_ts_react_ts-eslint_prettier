# 本リポジトリについて
  
2019/05/17現在、react開発で使いたいパッケージ・環境を整えたボイラープレートです。  
typescript + eslint + prettierで円滑な開発を目指しています。  
  
redux、redux middlewareなどは導入していません。  
必要に応じて導入する想定です。  

## 特徴
typescriptを用いた開発環境の構築はtslint、awesome-typescript-loaderをはじめしばらく不安定な状態が続きましたが、2019年になってeslintがtypescriptへ対応したことで環境が固まりつつあり、始めるにはベストなタイミングと判断しました。

eslintとの連携が可能なprettier、typescriptと相性の比較的良いreactを用いて安定した開発を行うこと。
react自体のスクラッチ開発環境構築は何度も行なっていますが、typescriptを使う場合を一から理解を深めつつ構築すること、今後の開発で活用できるように小さく作ることを目的としています。

## 懸念点
  
babelプラグインを使用する可能性を想定して `babel-loader` を入れているが、  
`ts-loader` に全部任せちゃってよいかもしれません。
  
## 導入した npm パッケージについて

こちらをご参照ください。
[ABOUT_PACKAGES](/ABOUT_PACKAGES.md)  

## webpack設定について
  
開発用・本番用で設定ファイルを分けるのが公式推奨のため分割しています。  
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

```
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
  
eslint、prettierはエディタ側の自動保存時フォーマットする想定なので入れていません。  
  
[package.json](/package.json)  
  
```
"scripts": {
  "start": "webpack-dev-server --config ./config/webpack.dev.js", // ./config/webpack.dev.js でローカルサーバ起動
  "build": "webpack --config ./config/webpack.prod.js", // 開発用ビルド
},
```
  
  
## vscode設定について
  
[.vscode/settings.json](.vscode/settings.json)
  
```
"eslint.enable": /* vscodeでeslintを有効化します */,
  "eslint.autoFixOnSave": /* 保存時に eslint --fix が走ります */,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "files.eol": "\n",
}
```
  
  
### 主な参考資料

* ベース資料 ts + react + webpack環境構築
[https://qiita.com/fisherman3110se/items/918d6ef4244f7b4558ca](https://qiita.com/fisherman3110se/items/918d6ef4244f7b4558ca)  
  
* @typescript-eslintについて
[http://watanabeyu.blogspot.com/2019/02/typescript-eslinttypescriptlinteslintai.html](http://watanabeyu.blogspot.com/2019/02/typescript-eslinttypescriptlinteslintai.html)  
[https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint](https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint)  
  
* vscode用の設定  
[https://qiita.com/karak/items/12811d235b0d8bc8ad00#vs-code](https://qiita.com/karak/items/12811d235b0d8bc8ad00#vs-code)  
  
* .ts/tsxインポート時に `eslint(import/no-unresolved)` が出る時の対処
[https://qiita.com/euxn23/items/e2b9226ab1e02a9b1f20](https://qiita.com/euxn23/items/e2b9226ab1e02a9b1f20)  
[https://github.com/alexgorbatchev/eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)  
  
* tsファイルのimportに失敗する　Module not found: Error: Can't resolve '.tsファイル'
[https://stackoverflow.com/questions/43595555/webpack-cant-resolve-typescript-modules](https://stackoverflow.com/questions/43595555/webpack-cant-resolve-typescript-modules)  
  
* webpack.config.js分割　本番・開発用
[https://qiita.com/teinen_qiita/items/4e828ac30221efb624e1](https://qiita.com/teinen_qiita/items/4e828ac30221efb624e1)  
