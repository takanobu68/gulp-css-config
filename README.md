# gulp-css-config
# 概要
Gulpを使って、CSSのみの開発を効率化する
#使い方
npmのインストールを行う
$ npm i

$ npx gulp
src>css>style.cssで変更、保存を行った場合
dest>css>style.cssにコンパイルされたファイルが置かれる。
処理内容
1、Stylelintによるコードエラーチェック
2、CSSMQPackerにより、メディアクエリをコードの最後にまとめる
3、Autoprefixerでベンダープレフィックスの付与

ctrl + C を押し、
Yとすることで、このモードは終了。

$ npx gulp --production
dest>css>style.cssのファイルを圧縮する

#環境
VSCodeのLiveServerと一緒に使ってください。

#補足
CSSのファイルを増やしたいときは
src>css直下に作ること

htmlのcssファイルリンク先は
dest>css直下のファイルとすること

