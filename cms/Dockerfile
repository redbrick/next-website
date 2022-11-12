FROM node:16

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ARG PORT=1337
ENV PORT=${PORT}

WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/app
COPY ./ .
RUN yarn build

EXPOSE ${PORT}
