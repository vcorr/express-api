const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})
const package = require("./package.json");
const doc = {
  info: {
    title: 'My APIxx',
    description: 'Description',
    version: package.version
  },
  host: 'localhost:3000',
  schemes: ['http'],
  basePath: '/'
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/users.route.ts'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);