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

FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.25.3-alpine
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build app/out /usr/share/nginx/html
#COPY --from=build .next /usr/share/nginx/html