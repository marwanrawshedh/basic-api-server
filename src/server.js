'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const foodRouter = require('./routes/food')
const sportRouter = require('./routes/sport')
const PORT = process.env.PORT || 3010;

// global middleware
app.use(logger);
app.use(express.json());


app.use(foodRouter); // use the food routes
app.use(sportRouter);
// this is a global middleware
app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}