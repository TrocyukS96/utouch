FROM node:16.15.0-slim AS deps

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install

FROM node:16.15.0-slim AS builder
ENV NODE_ENV=production
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run export

FROM nginx:alpine AS runner
COPY nginx /etc/nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /opt/app/out /usr/share/nginx/html
