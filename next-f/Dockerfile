FROM node:18
RUN npm -g install pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]