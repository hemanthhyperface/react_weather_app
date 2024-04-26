from node:16-alpine

WORKDIR /react-weather-app

COPY public/ /react-weather-app/public
COPY src/ /react-weather-app/src
COPY package.json /react-weather-app/

RUN npm install

CMD ["npm", "run", "start"]