var ReaProperty_schema = require("../models/ReaProperty")

module.exports.createReaProperty = function (ReaProperty, callback) {
    var ReaProperty = new ReaProperty_schema(ReaProperty)
    ReaProperty.save(function (error, ReaProperty) {
        callback(ReaProperty);
    });
}
module.exports.updateReaProperty = function (ReaProperty, callback) {
    ReaProperty_schema.findOneAndUpdate({ _id: ReaProperty._id }, { $set: ReaProperty }, { upsert: true, new: true }, function (error, ReaProperty) {
        callback(ReaProperty);
    });
}
module.exports.searchReaPropertyForUpdate = function (ReaPropertyID, callback) {
    ReaProperty_schema.findById({ _id: ReaPropertyID }, function (error, ReaProperty) {
        callback(ReaProperty);
    });
}
module.exports.deleteReaProperty = function (ReaPropertyID, callback) {
    ReaProperty_schema.findByIdAndRemove(ReaPropertyID, function (error, ReaProperty) {
        callback(ReaProperty);
    });
}
module.exports.getAllReaProperty = function (callback) {
    ReaProperty_schema.find(function (error, ReaProperty) {
        callback(ReaProperty);
    });
}
