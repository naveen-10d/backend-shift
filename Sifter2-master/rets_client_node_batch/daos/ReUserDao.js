var ReUser_schema = require("../models/ReUser")

module.exports.createReUser = function (ReUser, callback) {
    var ReUser = new ReUser_schema(ReUser)
    ReUser.save(function (error, ReUser) {
        callback(ReUser);
    });
}
module.exports.updateReUser = function (ReUser, callback) {
    ReUser_schema.findOneAndUpdate({ _id: ReUser._id }, { $set: ReUser }, { upsert: true, new: true }, function (error, ReUser) {
        callback(ReUser);
    });
}
module.exports.searchReUserForUpdate = function (ReUserID, callback) {
    ReUser_schema.findById({ _id: ReUserID }, function (error, ReUser) {
        callback(ReUser);
    });
}
module.exports.deleteReUser = function (ReUserID, callback) {
    ReUser_schema.findByIdAndRemove(ReUserID, function (error, ReUser) {
        callback(ReUser);
    });
}
module.exports.getAllReUser = function (callback) {
    ReUser_schema.find(function (error, ReUser) {
        callback(ReUser);
    });
}
