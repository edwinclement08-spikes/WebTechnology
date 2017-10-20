FROM mhart/alpine-node

RUN npm i -g nodemon

WORKDIR /src

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
