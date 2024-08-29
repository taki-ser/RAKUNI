# ベースイメージとしてNode.jsを使用
FROM node:lts

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.json と package-lock.json を作業ディレクトリにコピー
COPY rakuni-app/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY rakuni-app/ .

# 開発サーバーを起動
CMD ["npm", "start"]

# アプリケーションが動作するポートを指定
EXPOSE 3000