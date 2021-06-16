FROM klakegg/hugo:0.83.1-ext-alpine as hugo

FROM nginx:alpine

RUN apk --no-cache add git

COPY --from=hugo /bin/hugo-official /usr/bin/hugo
