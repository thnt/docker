FROM node:16 AS build-env
COPY . /app
WORKDIR /app
RUN yarn

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
WORKDIR /app
CMD ["server.js"]
