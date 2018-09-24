var service = require("../services/RetsPropertyHistoryService")
module.exports.createRetsPropertyHistory = function(req, res) {
  var RetsPropertyHistory = req.body;
  service.createRetsPropertyHistory(RetsPropertyHistory,function (RetsPropertyHistory){
     res.status(201)
     res.json(RetsPropertyHistory);
  });
}
module.exports.updateRetsPropertyHistory = function(req, res) {
  var RetsPropertyHistory = req.body;
  service.updateRetsPropertyHistory(RetsPropertyHistory,function (RetsPropertyHistory){
     res.status(200)
     res.json(RetsPropertyHistory);
  });
}
module.exports.searchRetsPropertyHistoryForUpdate = function(req, res) {
  var RetsPropertyHistoryID = req.params.id;
  service.searchRetsPropertyHistoryForUpdate(RetsPropertyHistoryID,function (RetsPropertyHistory){
     res.status(200)
     res.json(RetsPropertyHistory);
  });
}
module.exports.deleteRetsPropertyHistory = function(req, res) {
  var RetsPropertyHistoryID = req.params.id;
  service.deleteRetsPropertyHistory(RetsPropertyHistoryID,function (RetsPropertyHistory){
     res.status(200)
     res.json(RetsPropertyHistory);
  });
}
module.exports.getAllRetsPropertyHistory = function(req, res) {
  service.getAllRetsPropertyHistory(function (RetsPropertyHistory){
     res.status(200)
     res.json(RetsPropertyHistory);
  });
}