# Use a Node.js Alpine-based image for the development stage
FROM node:18-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

# Set the working directory in the container
WORKDIR /usr/app

# COPY package.json /usr/app/package.json
COPY ./package.json ./

# Install app dependencies
RUN npm install

# COPY everything else
COPY ./ ./

# Initial start cmd 
CMD [ "npm", "start" ]