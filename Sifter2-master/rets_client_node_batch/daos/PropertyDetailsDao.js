var PropertyDetails_schema = require("../models/PropertyDetails")

module.exports.createPropertyDetails = function (PropertyDetails, callback) {
  var PropertyDetails = new PropertyDetails_schema(PropertyDetails)
  PropertyDetails.save(function (error, PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.updatePropertyDetails = function (PropertyDetails, callback) {
  PropertyDetails_schema.findOneAndUpdate({ _id: PropertyDetails._id }, { $set: PropertyDetails }, { upsert: true, new: true }, function (error, PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.searchPropertyDetailsForUpdate = function (PropertyDetailsID, callback) {
  PropertyDetails_schema.findById({ _id: PropertyDetailsID }, function (error, PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.deletePropertyDetails = function (PropertyDetailsID, callback) {
  PropertyDetails_schema.findByIdAndRemove(PropertyDetailsID, function (error, PropertyDetails) {
    callback(PropertyDetails);
  });
}
module.exports.getAllPropertyDetails = function (callback) {
  PropertyDetails_schema.find(function (error, PropertyDetails) {
    callback(PropertyDetails);
  });
}