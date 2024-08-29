# # ベースイメージとしてNode.jsを使用
# FROM node:lts

# # 作業ディレクトリを作成
# WORKDIR /usr/src/app

# # package.json と package-lock.json を作業ディレクトリにコピー
# COPY app/package*.json ./

# # 依存関係をインストール
# RUN npm install

# # アプリケーションのソースコードをコピー
# COPY app/ .

# # 開発サーバーを起動
# CMD ["npm", "start"]

# # アプリケーションが動作するポートを指定
# EXPOSE 3000

FROM node:16.17.1-bullseye

# ワーキングディレクトリを/srcに設定
WORKDIR /src

# 不必要なapt-getファイルを消去
RUN apt-get clean

# ポートを5173に設定
EXPOSE 5173