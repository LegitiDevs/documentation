FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .
RUN pnpm docs:build

FROM alpine:latest

COPY --from=builder /app/docs/.vitepress/dist /site

CMD ["sh", "-c", "cp -a /site/. /output/"]
