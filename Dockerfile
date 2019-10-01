#lb session server app server
#author: Ripan Halder


# Carbon = Node v8
FROM node:carbon

#get latest node.js ver. for DEV only if needed
# FROM node:latest

# Configure Time Zone
ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


# Create app directory, Also Holds Applications Source Code
RUN mkdir -p /usr/src/app/ogsCalendarServer

# Create directory for static files
#RUN mkdir -p /usr/src/app/mobileLunchboxServer/www

# Create bind volume (mount point) for static files
#VOLUME /usr/src/app/mobileLunchboxServer/www

# Set the working directory
WORKDIR /usr/src/app/ogsCalendarServer

# Install app dependencies
COPY package.json /usr/src/app/ogsCalendarServer
RUN npm install

# Bundle app source
COPY . /usr/src/app/ogsCalendarServer

# Copy Swagger content into the static content folder
#COPY dist /usr/src/app/mobileLunchboxServer/www/mobileLunchboxServer/swagger

# Mapping to 80 public port
EXPOSE 80

CMD [ "node", "ogsCalendarServer.js" ]
