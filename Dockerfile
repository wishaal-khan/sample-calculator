FROM node:12

WORKDIR /sample-calculator

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm test

EXPOSE 5000

CMD ["npm", "start"]
