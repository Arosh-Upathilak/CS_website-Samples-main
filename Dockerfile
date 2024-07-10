# Use node:alpine as a base image for building the app
FROM node:alpine3.18 AS build

# Set the working directory
WORKDIR /App

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use nginx:alpine as a base image for serving the built app
FROM nginx:1.23-alpine

# Remove the default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built application files from the previous stage
COPY --from=build /App/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
