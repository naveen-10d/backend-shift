var dao = require("../daos/PropertyHistoryDao")

module.exports.createPropertyHistory = function (PropertyHistory, callback) {
  dao.createPropertyHistory(PropertyHistory, function (PropertyHistory) {
    callback(PropertyHistory);
  });
}
module.exports.updatePropertyHistory = function (PropertyHistory, callback) {
  dao.updatePropertyHistory(PropertyHistory, function (PropertyHistory) {
    callback(PropertyHistory);
  });
}
module.exports.searchPropertyHistoryForUpdate = function (PropertyHistoryID, callback) {
  dao.updatePropertyHistory(PropertyHistoryID, function (PropertyHistory) {
    callback(PropertyHistory);
  });
}
module.exports.deletePropertyHistory = function (PropertyHistoryID, callback) {
  dao.deletePropertyHistory(PropertyHistoryID, function (PropertyHistory) {
    callback(PropertyHistory);
  });
}
module.exports.getAllPropertyHistory = function (callback) {
  dao.getAllPropertyHistory(function (listOfPropertyHistory) {
    callback(listOfPropertyHistory);
  });
}