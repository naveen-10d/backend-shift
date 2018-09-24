
var rets = require('rets-client');
var fs = require('fs');
var photoSourceId = '12345';

//client level configuration
var clientSettings = {
    loginUrl: 'http://retsdd.mfrmls.com/matrixdd/rets/login',
    username: 'RETS799',
    password: 'VJiEJ25GecdN',
    version: 'RETS/1.7.2',
    userAgent: 'RETS node-client/4.x',
    method: 'POST'  // this is the default, or for some servers you may want 'POST'
};

//get Data from RETS_SERVER depending on what value passed to the parameters 
module.exports.getRetsServerDetails = function (city, postalcode, property, status, callback) {
    rets.getAutoLogoutClient(clientSettings, function (client) {

        //queryVariable
        var queryInfo = "(City=" + city + ")," + "(PostalCode=" + postalcode + ")," + "(PropertySubType=|" + property + ")," + "(MlsStatus=|" + status + ")"

        //Based on queryInfo it search the data from RETS_SERVER
        client.search.query("Property", "Property", queryInfo, { limit: 100, offset: 10 })
            .then(function (searchData) {
                callback(searchData);
            })


    }).catch(function (errorInfo) {
        var error = errorInfo.error || errorInfo;
        console.log("   ERROR: issue encountered:");
        outputFields(error);
        console.log('   ' + (error.stack || error).replace(/\n/g, '\n   '));
    });
}
//TO print the message in the terminal
function outputFields(obj, opts) {
    if (!obj) {
        console.log("      " + JSON.stringify(obj))
    } else {
        if (!opts) opts = {};

        var excludeFields;
        var loopFields;
        if (opts.exclude) {
            excludeFields = opts.exclude;
            loopFields = Object.keys(obj);
        } else if (opts.fields) {
            loopFields = opts.fields;
            excludeFields = [];
        } else {
            loopFields = Object.keys(obj);
            excludeFields = [];
        }
        for (var i = 0; i < loopFields.length; i++) {
            if (excludeFields.indexOf(loopFields[i]) != -1) {
                continue;
            }
            if (typeof (obj[loopFields[i]]) == 'object') {
                console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]], null, 2).replace(/\n/g, '\n      '));
            } else {
                console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]]));
            }
        }
    }
    console.log("");
}