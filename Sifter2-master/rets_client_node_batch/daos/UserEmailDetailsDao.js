var UserEmail_schema = require("../models/UserEmail")

module.exports.createUserEmail = function (UserEmail, callback) {
    var UserEmail = new UserEmail_schema(UserEmail)
    UserEmail.save(function (error, UserEmail) {
        callback(UserEmail);
    });
}
module.exports.updateUserEmail = function (UserEmail, callback) {
    UserEmail_schema.findOneAndUpdate({ _id: UserEmail._id }, { $set: UserEmail }, { upsert: true, new: true }, function (error, UserEmail) {
        callback(UserEmail);
    });
}
module.exports.searchUserEmailForUpdate = function (UserEmailID, callback) {
    UserEmail_schema.findById({ _id: UserEmailID }, function (error, UserEmail) {
        callback(UserEmail);
    });
}
module.exports.deleteUserEmail = function (UserEmailID, callback) {
    UserEmail_schema.findByIdAndRemove(UserEmailID, function (error, UserEmail) {
        callback(UserEmail);
    });
}
module.exports.getAllUserEmail = function (callback) {
    UserEmail_schema.find(function (error, UserEmail) {
        callback(UserEmail);
    });
}
