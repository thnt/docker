FROM klakegg/hugo:0.83.1-ext-alpine-ci

RUN apk --no-cache add nginx ca-certificates && mkdir /run/nginx

CMD ["nginx", "-g", "daemon off;"]
