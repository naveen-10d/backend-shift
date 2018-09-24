var express = require('express');
var api = express.Router();
var Router = require('./routers');

api.use('/api',Router.ReuserRouter);
api.use('/City',Router.CityRouter);
api.use('/assignzipcode',Router.AssignZipcode);

module.exports = api;