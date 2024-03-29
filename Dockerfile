FROM node:10.16.0

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]

# https://www.peterbe.com/plog/how-to-create-react-app-with-docker
# docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app jonathanwthom/hilary-and-adam
