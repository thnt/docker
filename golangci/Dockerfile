FROM golang:1.24.0

RUN go install github.com/vektra/mockery/v2@latest
RUN go install honnef.co/go/tools/cmd/staticcheck@latest

RUN go clean -cache -modcache
