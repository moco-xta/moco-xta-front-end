# FROM node:20-alpine
# RUN rm -rf /etc/nginx/conf.d/*
# COPY .next /usr/share/nginx/html
# EXPOSE 3000
# COPY nginx.conf /etc/nginx/conf.d/




# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# FROM nginx:1.25.3-alpine
# COPY --from=builder .next /usr/share/nginx/html
# COPY .next ./.next
# CMD ["npm", "run", "start"]
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:20-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# FROM nginx:1.25.3-alpine
# EXPOSE 3000
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build app/out /usr/share/nginx/html
# COPY --from=build .next /usr/share/nginx/html




FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

# COPY src ./src
# COPY public ./public
# COPY next.config.mjs .
# COPY tsconfig.json .

COPY . .

# ARG ENV_VARIABLE
# ENV ENV_VARIABLE=${ENV_VARIABLE}
# ARG NEXT_PUBLIC_ENV_VARIABLE
# ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

RUN npm run build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

CMD ["node", "server.js"]