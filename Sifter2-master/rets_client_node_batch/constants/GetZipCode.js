var asyncLoop = require('node-async-loop');
var cityZipcodes = require("./SpecialZipcodes");

module.exports.getzipcodes = function (city, callback) {
    console.log("before testing---- ",city)

    asyncLoop(cityZipcodes, function (cityzipcode, next) {
        // console.log("testing---- ",cityzipcode)
        // if()
        if(cityzipcode.key === city){
            // console.log("entering into if")
             callback(cityzipcode.value);
        }
        else{
            next();
        }

        // console.log("nymber of items are ---->>> ", item)
        // next();
        
    }, function (err) {
            if (err) {
                console.error('Error: ' + err.message);
                return;
            }

            console.log('Finished!');
        });
}