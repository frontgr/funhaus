FROM node:lts
RUN mkdir app
WORKDIR /app
COPY src ./
COPY scss ./
COPY . .
RUN npm install -g serve
RUN npm install -g sass

CMD sass ./scss/style.scss ./css/style.css && serve -p 4000 .
