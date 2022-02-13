FROM node:lts-alpine

RUN apk add --no-cache --no-progress chromium

COPY . /app
WORKDIR /app
RUN yarn

CMD ["server.js"]
