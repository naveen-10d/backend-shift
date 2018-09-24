var express = require('express');
var apiRouter = express.Router();
var CityController = require('../../controller/CityController');

apiRouter.post('/addzipcode',CityController.addZipCode);
apiRouter.get('/listofstates',CityController.getListOfState);
apiRouter.get('/listofcities',CityController.getListOfCities);
apiRouter.get('/getpostalbycity/:city',CityController.getPostalCodeByCity);
apiRouter.delete('/deletezipcode/:postalCode',CityController.deletePostalCode);


module.exports = apiRouter;