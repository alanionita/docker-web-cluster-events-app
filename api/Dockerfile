FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma/ ./

RUN npm install

CMD ["npm", "build"]

COPY dist/ .

EXPOSE 3000

CMD ["npm", "start"]