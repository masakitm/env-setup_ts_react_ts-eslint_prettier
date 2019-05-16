## 各パッケージについて
  
* eslintによるjsチェック
* prettierとeslintの連携
* typescriptをeslintでlintする
  
以上の3つを主なコンセプトとしています。

### devDependencies
```
"@babel/core": babel7の本体

"@babel/preset-env": babel7用 必要なBabelプラグインを自動で決定するライブラリ

"@babel/preset-react": babel7用 react用babelプラグインまとめ

"@typescript-eslint/eslint-plugin": ts+eslint用プラグイン `@typescript-eslint/parser`も含むっぽい

"babel-loader": webpackでbabel使えるようにする

"eslint": 定番のjsエラー検出プラグイン

"eslint-config-airbnb": airbnbで使われてるeslintルールセット

"eslint-config-prettier": eslintとprettierを共存させる

"eslint-import-resolver-typescript": eslintが.tsファイルのimportをエラーだ！って騒ぐのを防ぐ

"eslint-plugin-import": eslintのプラグインを使えるようにする

"eslint-plugin-jsx-a11y": eslint-config-airbnbに必要

"eslint-plugin-prettier": eslintとprettierを共存させる

"eslint-plugin-react": eslintをreact構文に対応させる

"prettier": コードフォーマッタ

"source-map-loader": いらんかも

"ts-loader": webpackにtsを読ませる

"typescript": ts本体

"webpack": webpack本体

"webpack-cli": webpackコマンドを叩けるようにする

"webpack-dev-server": webpack用開発サーバー
```

### dependencies
```
"@types/react": react用の型定義

"@types/react-dom": react-dom用の型定義

"react": react本体

"react-dom": reactアプリのDOMツリーを出力する

"webpack-merge": webpack分割時、マージする
```