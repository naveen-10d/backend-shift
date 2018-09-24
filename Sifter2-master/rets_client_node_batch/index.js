
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var clientPath = path.resolve(__dirname, "client");
var config = require('./config/config')
var country = require('./constants/Countries');
var specialZipCode = require('./constants/SpecialZipcodes')
var asyncLoop = require('node-async-loop');
var zipcode = require('./constants/GetZipCode');
var Rets = require('./RETS/RetsProperty');
var ReaPropertySearchDao = require("./daos/RETSDaos/ReaPropertySearchDao");

//temporary call the 
ReaPropertySearchDao.findPropertiesByCity("ALTAMONTE SPRINGS", 32701, "SingleFamilyResidence", "ACT");

var startDate = new Date();
// console.log("starting date ", startDate);
var listOfcountry = country.cities;
asyncLoop(listOfcountry, (city, next) => {
  // console.log("city values first ", city)
  var cityName = city.replace(' ', '_');
  var cityZipCodesName = "specialZipCode." + cityName;
  zipcode.getzipcodes(cityName, results => {
    // console.log("get valeus are ---- ", results);
    var cityZipCodes = results;
    asyncLoop(cityZipCodes, (zipCode, next) => {
      // console.log("city and zipcode --- ", city, zipCode)
      next();
    })
    next();
  })
}, function (err) {
  if (err) {
    console.log("some error occurs");
  }
})


var endDate = new Date();
// console.log("ending date ", endDate);

// app.use(helmet())
/*
app.use(helmet.noCache())

app.use(helmet.frameguard({ action: 'sameorigin' }))

app.use(helmet.hidePoweredBy())
*/

//scheduling jobs for every 1hr and 7 minutes
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.minute = 7;

var j = schedule.scheduleJob(rule, function () {
  var date = new Date();
  console.log('The answer to life, the universe, and everything! ', date);
});

app.use(bodyParser.json({ limit: '50mb' }))
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});
var mongodb = config.database.dialect + '://' + config.database.host + '/' + config.database.name
var promise = mongoose.connect(mongodb, {
});
app.use("/", express.static(clientPath));
app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express server listening on port ' + port);