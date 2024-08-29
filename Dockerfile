# ベースイメージとしてNode.jsを使用
FROM node:lts

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# 依存関係のインストール
COPY package*.json ./
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# 開発サーバーを起動
CMD ["yarn", "start"]

# アプリケーションが動作するポートを指定
EXPOSE 3000