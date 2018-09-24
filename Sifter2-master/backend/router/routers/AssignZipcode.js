var express = require('express');
var apiRouter = express.Router();
var AssignZipcodeController = require('../../controller/AssignZipcodeController');

apiRouter.post('/assignzipcode',AssignZipcodeController.assignZipcodeToUser);
apiRouter.get('/getassigneduser/:userId',AssignZipcodeController.getUserPostalCode);
apiRouter.get('/getusercities/:state/:_id',AssignZipcodeController.getCityForUser);
apiRouter.delete('/deletezipcodebyuser/:username/:zipcode',AssignZipcodeController.deleteZipcodeByUser);


module.exports = apiRouter;