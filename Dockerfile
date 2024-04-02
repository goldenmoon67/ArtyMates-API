FROM node:alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --fetch-retries=10 --fetch-retry-factor=2 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=60000

RUN npm install -g nodemon
COPY . .
EXPOSE 4000
# Download Dockerize
RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Wait for neo4j db start and start server
CMD dockerize -wait tcp://artymates-api-neo4j_yt-1:7687 -timeout 30s && npm start
