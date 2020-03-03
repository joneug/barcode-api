FROM node:lts-alpine

WORKDIR /usr/src/app

ARG VERSION
RUN BWIP_VERSION=VERSION npm run dependencies

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
