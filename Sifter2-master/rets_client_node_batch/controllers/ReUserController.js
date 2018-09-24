var service = require("../services/ReUserService")
module.exports.createReUser = function(req, res) {
  var ReUser = req.body;
  service.createReUser(ReUser,function (ReUser){
     res.status(201)
     res.json(ReUser);
  });
}
module.exports.updateReUser = function(req, res) {
  var ReUser = req.body;
  service.updateReUser(ReUser,function (ReUser){
     res.status(200)
     res.json(ReUser);
  });
}
module.exports.searchReUserForUpdate = function(req, res) {
  var ReUserID = req.params.id;
  service.searchReUserForUpdate(ReUserID,function (ReUser){
     res.status(200)
     res.json(ReUser);
  });
}
module.exports.deleteReUser = function(req, res) {
  var ReUserID = req.params.id;
  service.deleteReUser(ReUserID,function (ReUser){
     res.status(200)
     res.json(ReUser);
  });
}
module.exports.getAllReUser = function(req, res) {
  service.getAllReUser(function (ReUser){
     res.status(200)
     res.json(ReUser);
  });
}