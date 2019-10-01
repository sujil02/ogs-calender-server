/**
 * @file ogsCalendarServer.js
 * @author Ripan Halder
 * @version 1.0
 * @since 09/29/2019
 * @copyright Northeastern University
 */

//Commons
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
var swaggerUi = require('swagger-ui-express');
var swaggerJsdoc = require('swagger-jsdoc');
var app = express(); //needs to be assigned later

//App Properties
const applicationPropertiesSingleton = require(path.resolve('.') + '/src/modules/applicationPropertiesSingleton.js');

//Logger
const LOGGER = require(path.resolve('.') + '/src/logger/logger.js');

//Server Config
app = express();
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  limit: '50mb'
}));
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors({
  origin: '*'
}));
app.use(compression());

//App Attributes Env Values
var appContextPath = applicationPropertiesSingleton.VAR_WP_CONTEXT_PATH;
var appPort = applicationPropertiesSingleton.VAR_WP_PORT;

// Swagger
var swaggerUrl = appContextPath + '/swagger';
const options = {
  swaggerDefinition: {
    info: {
      version: "v1",
      title: "REST API for 'OGS Calendar Server' Backend Application"
    },
  },
  apis: ['./src/routes/*.js']
};
const specs = swaggerJsdoc(options);
app.use(swaggerUrl, swaggerUi.serve, swaggerUi.setup(specs));
LOGGER.debug('Swagger API running on ' + swaggerUrl);

app.use(function (err, req, res, next) {
  return res.status(500);
});

//Route declaration
var eventsRoute = require(path.resolve(".") + '/src/routes/eventsRoute.js');

//ROUTES MAPPING
app.use(appContextPath + '/', eventsRoute);

//Mongoose configuration
var mongoConnParams = {
  autoReconnect: true,
  reconnectTries: 5, // Never stop trying to reconnect,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
};
mongoose.Promise = global.Promise;
mongoose.connect(applicationPropertiesSingleton.VAR_DB_WP, mongoConnParams);
mongoose.set('debug', true);


var server = app.listen(appPort, function () {
  var port = server.address().port;
  LOGGER.debug('Express server listening on port %s.', port);
});


module.exports = app;