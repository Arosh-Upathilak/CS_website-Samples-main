FROM  node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
CMD ["npm","run","start"]


#Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /App/build .
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;"]
