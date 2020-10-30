# Stage 0, "build-stage", based on Node.js, to build and compile Angular

FROM node:10.22.1-alpine as build-stage

WORKDIR app

# copy package.json and package-lock.json into workdir /app
COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@1.4.3

# copy all files from workspace into workdir /app
COPY . .

ARG configuration

# run the build inside workdir /app with output path /app/dist
#RUN npm run build -- --outputPath=./dist --configuration=${configuration}
RUN npm run build:prod

# Stage 2, based on NodeJS, to have only the compiled app, ready for production with SSR

FROM node:10.22.1-alpine as serve-stage

WORKDIR app

# copy dependency definitions
COPY --from=build-stage /app/package.json ./

# copy (build-stage)/app/dist in /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/server.js ./dist/server.js

RUN npm install express@4.17.1

# Expose the port the app runs in
EXPOSE 5001

# Serve the app
CMD node ./dist/server.js
