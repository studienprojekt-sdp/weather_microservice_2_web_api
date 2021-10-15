FROM node:14-slim

WORKDIR /src

ADD package.json package-lock.json ./

RUN npm install

ADD . . 

