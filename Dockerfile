FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.25.3-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# COPY .next ./.next
#EXPOSE 3000
EXPOSE 80
# CMD ["npm", "run", "start"]
CMD ["nginx", "-g", "daemon off;"]