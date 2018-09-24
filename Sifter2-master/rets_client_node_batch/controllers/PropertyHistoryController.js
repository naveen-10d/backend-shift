var service = require("../services/PropertyHistoryService")
module.exports.createPropertyHistory = function(req, res) {
  var PropertyHistory = req.body;
  service.createPropertyHistory(PropertyHistory,function (PropertyHistory){
     res.status(201)
     res.json(PropertyHistory);
  });
}
module.exports.updatePropertyHistory = function(req, res) {
  var PropertyHistory = req.body;
  service.updatePropertyHistory(PropertyHistory,function (PropertyHistory){
     res.status(200)
     res.json(PropertyHistory);
  });
}
module.exports.searchPropertyHistoryForUpdate = function(req, res) {
  var PropertyHistoryID = req.params.id;
  service.searchPropertyHistoryForUpdate(PropertyHistoryID,function (PropertyHistory){
     res.status(200)
     res.json(PropertyHistory);
  });
}
module.exports.deletePropertyHistory = function(req, res) {
  var PropertyHistoryID = req.params.id;
  service.deletePropertyHistory(PropertyHistoryID,function (PropertyHistory){
     res.status(200)
     res.json(PropertyHistory);
  });
}
module.exports.getAllPropertyHistory = function(req, res) {
  service.getAllPropertyHistory(function (PropertyHistory){
     res.status(200)
     res.json(PropertyHistory);
  });
}