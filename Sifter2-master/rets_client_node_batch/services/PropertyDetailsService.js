var dao = require("../daos/PropertyDetailsDao")

module.exports.createPropertyDetails = function (PropertyDetails, callback) {
  dao.createPropertyDetails(PropertyDetails, function (PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.updatePropertyDetails = function (PropertyDetails, callback) {
  dao.updatePropertyDetails(PropertyDetails, function (PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.searchPropertyDetailsForUpdate = function (PropertyDetailsID, callback) {
  dao.updatePropertyDetails(PropertyDetailsID, function (PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.deletePropertyDetails = function (PropertyDetailsID, callback) {
  dao.deletePropertyDetails(PropertyDetailsID, function (PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.getAllPropertyDetails = function (callback) {
  dao.getAllPropertyDetails(function (listOfPropertyDetails) {
    callback(listOfPropertyDetails);
  });
}