FROM node:16
WORKDIR /app
RUN npm install yarn
COPY package.json ./
RUN yarn install
COPY . .
CMD ["node", "src/index.js"]