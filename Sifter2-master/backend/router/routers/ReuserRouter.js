var express = require('express');
var apiRouter = express.Router();
var RegistrationController = require('../../controller/RegistrationController');

//Reuser
apiRouter.post('/Signup', RegistrationController.signUp);
apiRouter.put('/emailConfirmation', RegistrationController.updateUser);
apiRouter.delete('/removeUser', RegistrationController.deleteUser);

module.exports = apiRouter;