FROM node
RUN wget -P /opt/ https://yarnpkg.com/latest.tar.gz
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
