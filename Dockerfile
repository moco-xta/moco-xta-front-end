FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build app/out /usr/share/nginx/html