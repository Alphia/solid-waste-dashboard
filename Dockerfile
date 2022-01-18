FROM nginx:stable-alpine
COPY build /usr/share/nginx/html
RUN rm /usr/share/nginx/html/config.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]