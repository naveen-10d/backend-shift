var service = require("../services/ReaPropertyService")
module.exports.createReaProperty = function(req, res) {
  var ReaProperty = req.body;
  service.createReaProperty(ReaProperty,function (ReaProperty){
     res.status(201)
     res.json(ReaProperty);
  });
}
module.exports.updateReaProperty = function(req, res) {
  var ReaProperty = req.body;
  service.updateReaProperty(ReaProperty,function (ReaProperty){
     res.status(200)
     res.json(ReaProperty);
  });
}
module.exports.searchReaPropertyForUpdate = function(req, res) {
  var ReaPropertyID = req.params.id;
  service.searchReaPropertyForUpdate(ReaPropertyID,function (ReaProperty){
     res.status(200)
     res.json(ReaProperty);
  });
}
module.exports.deleteReaProperty = function(req, res) {
  var ReaPropertyID = req.params.id;
  service.deleteReaProperty(ReaPropertyID,function (ReaProperty){
     res.status(200)
     res.json(ReaProperty);
  });
}
module.exports.getAllReaProperty = function(req, res) {
  service.getAllReaProperty(function (ReaProperty){
     res.status(200)
     res.json(ReaProperty);
  });
}