# Base image
FROM node:18-alpine

# App directory
WORKDIR /app

# Package files copy
COPY package*.json ./

# Dependencies install
RUN npm install

# App code copy
COPY . .

# Backend port
EXPOSE 3000

# Server start
CMD ["node", "index.js"]
