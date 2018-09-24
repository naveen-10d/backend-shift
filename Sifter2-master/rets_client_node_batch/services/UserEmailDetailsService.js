var dao = require("../daos/UserEmailDetailsDao")

module.exports.createUserEmail = function (UserEmail, callback) {
    dao.createUserEmail(UserEmail, function (UserEmail) {
        callback(UserEmail);
    });
}
module.exports.updateUserEmail = function (UserEmail, callback) {
    dao.updateUserEmail(UserEmail, function (UserEmail) {
        callback(UserEmail);
    });
}
module.exports.searchUserEmailForUpdate = function (UserEmailID, callback) {
    dao.updateUserEmail(UserEmailID, function (UserEmail) {
        callback(UserEmail);
    });
}
module.exports.deleteUserEmail = function (UserEmailID, callback) {
    dao.deleteUserEmail(UserEmailID, function (UserEmail) {
        callback(UserEmail);
    });
}
module.exports.getAllUserEmail = function (callback) {
    dao.getAllUserEmail(function (listOfUserEmail) {
        callback(listOfUserEmail);
    });
}