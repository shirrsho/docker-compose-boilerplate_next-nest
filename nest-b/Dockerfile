# Base image
FROM node:18

RUN npm -g install pnpm

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN pnpm install

# Bundle app source
COPY . .

EXPOSE 4000

# Creates a "dist" folder with the production build
# RUN pnpm run build

# Start the server using the production build
CMD [ "pnpm", "run", "start" ]
