FROM klakegg/hugo:0.83.1-ext-alpine as hugo

FROM nginx:alpine

RUN apk update && apk add git && /var/cache/apk/*

COPY --from=hugo /bin/hugo-official /usr/bin/hugo
