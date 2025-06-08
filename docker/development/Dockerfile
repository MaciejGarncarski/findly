# Install dependencies only when needed
FROM node:24-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
COPY next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "dev"]
