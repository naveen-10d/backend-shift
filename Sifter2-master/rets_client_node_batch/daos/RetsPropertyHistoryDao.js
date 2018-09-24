var RetsPropertyHistory_schema = require("../models/RetsPropertyHistory")

module.exports.createRetsPropertyHistory = function (RetsPropertyHistory, callback) {
    var RetsPropertyHistory = new RetsPropertyHistory_schema(RetsPropertyHistory)
    RetsPropertyHistory.save(function (error, RetsPropertyHistory) {
        callback(RetsPropertyHistory);
    });
}
module.exports.updateRetsPropertyHistory = function (RetsPropertyHistory, callback) {
    RetsPropertyHistory_schema.findOneAndUpdate({ _id: RetsPropertyHistory._id }, { $set: RetsPropertyHistory }, { upsert: true, new: true }, function (error, RetsPropertyHistory) {
        callback(RetsPropertyHistory);
    });
}
module.exports.searchRetsPropertyHistoryForUpdate = function (RetsPropertyHistoryID, callback) {
    RetsPropertyHistory_schema.findById({ _id: RetsPropertyHistoryID }, function (error, RetsPropertyHistory) {
        callback(RetsPropertyHistory);
    });
}
module.exports.deleteRetsPropertyHistory = function (RetsPropertyHistoryID, callback) {
    RetsPropertyHistory_schema.findByIdAndRemove(RetsPropertyHistoryID, function (error, RetsPropertyHistory) {
        callback(RetsPropertyHistory);
    });
}
module.exports.getAllRetsPropertyHistory = function (callback) {
    RetsPropertyHistory_schema.find(function (error, RetsPropertyHistory) {
        callback(RetsPropertyHistory);
    });
}
