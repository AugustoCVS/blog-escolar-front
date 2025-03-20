FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

RUN echo "VITE_API_URL=${VITE_API_URL}" > .env

RUN yarn build

EXPOSE 4173

CMD ["yarn", "preview", "--host"]