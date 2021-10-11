FROM node:12

WORKDIR /sample-calculator

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 5000

CMD ["npm", "start"]
