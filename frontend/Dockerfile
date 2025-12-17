# ---------- Build stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# package files
COPY package*.json ./
RUN npm install

# source code
COPY . .

# react build
RUN npm run build


# ---------- Production stage ----------
FROM nginx:alpine

# build files copy to nginx
COPY --from=build /app/build /usr/share/nginx/html

# nginx port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
