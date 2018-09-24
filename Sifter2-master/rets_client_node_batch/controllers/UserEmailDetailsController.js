var service = require("../services/UserEmailDetailsService")
module.exports.createUserEmail = function(req, res) {
  var UserEmail = req.body;
  service.createUserEmail(UserEmail,function (UserEmail){
     res.status(201)
     res.json(UserEmail);
  });
}
module.exports.updateUserEmail = function(req, res) {
  var UserEmail = req.body;
  service.updateUserEmail(UserEmail,function (UserEmail){
     res.status(200)
     res.json(UserEmail);
  });
}
module.exports.searchUserEmailForUpdate = function(req, res) {
  var UserEmailID = req.params.id;
  service.searchUserEmailForUpdate(UserEmailID,function (UserEmail){
     res.status(200)
     res.json(UserEmail);
  });
}
module.exports.deleteUserEmail = function(req, res) {
  var UserEmailID = req.params.id;
  service.deleteUserEmail(UserEmailID,function (UserEmail){
     res.status(200)
     res.json(UserEmail);
  });
}
module.exports.getAllUserEmail = function(req, res) {
  service.getAllUserEmail(function (UserEmail){
     res.status(200)
     res.json(UserEmail);
  });
}