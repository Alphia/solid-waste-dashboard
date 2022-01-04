FROM nginx:stable-alpine
COPY shannon/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]