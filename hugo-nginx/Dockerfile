FROM 0.83.1-ext-alpine as hugo

FROM nginx:alpine

COPY --from=hugo /bin/hugo /usr/bin/hugo
