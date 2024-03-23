FROM node:20-alpine AS base
# FROM node:20-alpine
FROM base AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM base AS runner
COPY .next ./.next
CMD ["npm", "run", "start"]