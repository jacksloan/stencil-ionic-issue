FROM node:16
WORKDIR /build 
COPY . /build/
RUN npm remove puppeteer
RUN npm i
CMD [ "npm", "run", "start" ]