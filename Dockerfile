FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .
ARG VERSION
RUN BWIP_VERSION=VERSION npm run dependencies

EXPOSE 8080
CMD [ "npm", "start" ]
