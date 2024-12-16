FROM node:22-slim

RUN mkdir -p /miniapp

WORKDIR /miniapp

COPY package.json /miniapp
COPY package-lock.json /miniapp

RUN npm install 

COPY ./public /miniapp/public
COPY ./src /miniapp/src
EXPOSE 3000

CMD [ "node", "/miniapp/src/index.js"]