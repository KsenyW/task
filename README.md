dev: npm run start:dev
prod: npm run start:prod

run server: npm start


docker:
  docker build --tag=task .
  docker run --rm -it -p 3000:3000 task