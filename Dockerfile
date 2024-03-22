FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY .next /usr/share/nginx/html