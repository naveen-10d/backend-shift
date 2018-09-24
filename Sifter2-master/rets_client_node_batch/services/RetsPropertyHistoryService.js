var dao = require("../daos/ReaPropertyHistoryDao")

module.exports.createReaPropertyHistory = function (ReaPropertyHistory, callback) {
    dao.createReaPropertyHistory(ReaPropertyHistory, function (ReaPropertyHistory) {
        callback(ReaPropertyHistory);
    });
}
module.exports.updateReaPropertyHistory = function (ReaPropertyHistory, callback) {
    dao.updateReaPropertyHistory(ReaPropertyHistory, function (ReaPropertyHistory) {
        callback(ReaPropertyHistory);
    });
}
module.exports.searchReaPropertyHistoryForUpdate = function (ReaPropertyHistoryID, callback) {
    dao.updateReaPropertyHistory(ReaPropertyHistoryID, function (ReaPropertyHistory) {
        callback(ReaPropertyHistory);
    });
}
module.exports.deleteReaPropertyHistory = function (ReaPropertyHistoryID, callback) {
    dao.deleteReaPropertyHistory(ReaPropertyHistoryID, function (ReaPropertyHistory) {
        callback(ReaPropertyHistory);
    });
}
module.exports.getAllReaPropertyHistory = function (callback) {
    dao.getAllReaPropertyHistory(function (listOfReaPropertyHistory) {
        callback(listOfReaPropertyHistory);
    });
}