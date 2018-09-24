var service = require("../services/PropertyDetailsService")
module.exports.createPropertyDetails = function(req, res) {
  var PropertyDetails = req.body;
  service.createPropertyDetails(PropertyDetails,function (PropertyDetails){
     res.status(201)
     res.json(PropertyDetails);
  });
}
module.exports.updatePropertyDetails = function(req, res) {
  var PropertyDetails = req.body;
  service.updatePropertyDetails(PropertyDetails,function (PropertyDetails){
     res.status(200)
     res.json(PropertyDetails);
  });
}
module.exports.searchPropertyDetailsForUpdate = function(req, res) {
  var PropertyDetailsID = req.params.id;
  service.searchPropertyDetailsForUpdate(PropertyDetailsID,function (PropertyDetails){
     res.status(200)
     res.json(PropertyDetails);
  });
}
module.exports.deletePropertyDetails = function(req, res) {
  var PropertyDetailsID = req.params.id;
  service.deletePropertyDetails(PropertyDetailsID,function (PropertyDetails){
     res.status(200)
     res.json(PropertyDetails);
  });
}
module.exports.getAllPropertyDetails = function(req, res) {
  service.getAllPropertyDetails(function (PropertyDetails){
     res.status(200)
     res.json(PropertyDetails);
  });
}