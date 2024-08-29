# docker-compose build
docker-compose up -d
docker-compose run app npm run build
# docker-compose run app npm run start
# 以下はtemplateを指定して作成する場合
# docker-compose run --rm app sh -c 'npx create-react-app rakuni-app --template typescript'