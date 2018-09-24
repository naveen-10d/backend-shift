var dao = require("../daos/ReaPropertyDao")

module.exports.createReaProperty = function (ReaProperty, callback) {
  dao.createReaProperty(ReaProperty, function (ReaProperty) {
    callback(ReaProperty);
  });
}
module.exports.updateReaProperty = function (ReaProperty, callback) {
  dao.updateReaProperty(ReaProperty, function (ReaProperty) {
    callback(ReaProperty);
  });
}
module.exports.searchReaPropertyForUpdate = function (ReaPropertyID, callback) {
  dao.updateReaProperty(ReaPropertyID, function (ReaProperty) {
    callback(ReaProperty);
  });
}
module.exports.deleteReaProperty = function (ReaPropertyID, callback) {
  dao.deleteReaProperty(ReaPropertyID, function (ReaProperty) {
    callback(ReaProperty);
  });
}
module.exports.getAllReaProperty = function (callback) {
  dao.getAllReaProperty(function (listOfReaProperty) {
    callback(listOfReaProperty);
  });
}