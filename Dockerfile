FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm dependencies
COPY package*.json ./
RUN apk --no-cache add --virtual native-deps \
  bash g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g && \
  npm install --quiet
#  apk del native-deps

# Copy source code to work dir
COPY . .
RUN npm run build

# Configure port
ENV PORT 3000
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
