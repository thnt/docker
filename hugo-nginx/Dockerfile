FROM klakegg/hugo:0.101.0-ext-alpine

RUN apk --no-cache add nginx ca-certificates && mkdir /run/nginx

CMD ["nginx", "-g", "daemon off;"]
