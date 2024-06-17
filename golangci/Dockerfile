FROM golang:1.22.4

RUN go install github.com/vektra/mockery/v2@latest
RUN go install honnef.co/go/tools/cmd/staticcheck@latest

RUN go clean -cache -modcache
