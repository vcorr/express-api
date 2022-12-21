# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

WORKDIR /app

COPY .swcrc nodemon.json package.json package-lock.json tsconfig.json .prettierrc swagger.js swagger-output.json   /app/
#COPY . .
RUN npm install
COPY ./src/ ./src/

EXPOSE 3000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

