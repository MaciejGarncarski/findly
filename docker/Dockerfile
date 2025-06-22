# Install dependencies only when needed
FROM node:24-alpine AS deps

WORKDIR /app

# TODO: FIX permission issue for generated routes. Only @/routes/**/**

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
