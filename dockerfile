### Build app ###
FROM node:14.16.0-alpine3.12 as build-app
RUN mkdir -p /app
WORKDIR /app
# Install dependencies
COPY package.json /app
RUN npm install
# Build app
COPY . /app
RUN npm run build

### Create image ###
FROM nginx:1.19.7-alpine as build-image
COPY --from=build-app /app/dist/k8s-angular-app /usr/share/nginx/html
