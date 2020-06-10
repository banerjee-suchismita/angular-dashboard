FROM nginx:1.13.3-alpine
#COPY /nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY dist/angular-dashboard /usr/share/nginx/html