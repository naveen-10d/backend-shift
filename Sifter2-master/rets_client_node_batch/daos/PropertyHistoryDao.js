var PropertyHistory_schema = require("../models/PropertyHistory")

module.exports.createPropertyHistory = function (PropertyHistory, callback) {
    var PropertyHistory = new PropertyHistory_schema(PropertyHistory)
    PropertyHistory.save(function (error, PropertyHistory) {
        callback(PropertyHistory);
    });
}
module.exports.updatePropertyHistory = function (PropertyHistory, callback) {
    PropertyHistory_schema.findOneAndUpdate({ _id: PropertyHistory._id }, { $set: PropertyHistory }, { upsert: true, new: true }, function (error, PropertyHistory) {
        callback(PropertyHistory);
    });
}
module.exports.searchPropertyHistoryForUpdate = function (PropertyHistoryID, callback) {
    PropertyHistory_schema.findById({ _id: PropertyHistoryID }, function (error, PropertyHistory) {
        callback(PropertyHistory);
    });
}
module.exports.deletePropertyHistory = function (PropertyHistoryID, callback) {
    PropertyHistory_schema.findByIdAndRemove(PropertyHistoryID, function (error, PropertyHistory) {
        callback(PropertyHistory);
    });
}
module.exports.getAllPropertyHistory = function (callback) {
    PropertyHistory_schema.find(function (error, PropertyHistory) {
        callback(PropertyHistory);
    });
}
