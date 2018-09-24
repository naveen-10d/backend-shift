var dao = require("../daos/ReUserDao")

module.exports.createReUser = function (ReUser, callback) {
    dao.createReUser(ReUser, function (ReUser) {
        callback(ReUser);
    });
}
module.exports.updateReUser = function (ReUser, callback) {
    dao.updateReUser(ReUser, function (ReUser) {
        callback(ReUser);
    });
}
module.exports.searchReUserForUpdate = function (ReUserID, callback) {
    dao.updateReUser(ReUserID, function (ReUser) {
        callback(ReUser);
    });
}
module.exports.deleteReUser = function (ReUserID, callback) {
    dao.deleteReUser(ReUserID, function (ReUser) {
        callback(ReUser);
    });
}
module.exports.getAllReUser = function (callback) {
    dao.getAllReUser(function (listOfReUser) {
        callback(listOfReUser);
    });
}