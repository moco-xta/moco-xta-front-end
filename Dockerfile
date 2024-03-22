FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
RUN npm run build
FROM nginx:1.25.4-alpine
COPY .next /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]