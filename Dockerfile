FROM nginx:latest as website

COPY . /usr/share/nginx/html

EXPOSE 80