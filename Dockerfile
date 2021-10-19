# Stage 1
FROM node:14.18.1-alpine as node14_app

WORKDIR /app
#ENV PORT 5000
COPY package.json .
RUN npm install
COPY . .

#ARG REACT_APP_API_BASE_URL
#ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

#RUN npm run build

# Stage 2
#FROM nginx:1.17.0-alpine

#COPY --from=build-stage /devjobs/build /usr/share/nginx/html
#EXPOSE $REACT_DOCKER_PORT

CMD npm start
#CMD npm desarrollo