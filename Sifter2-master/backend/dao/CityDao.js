var CityAndZipcode = require('../model/CityAndZipcode');

//add zipcode
module.exports.addZipCode = (userData, callback) =>{
    var cityandzipcode = new CityAndZipcode(userData);     
    cityandzipcode.save(function(data, err){
        if(err){
            callback(err);
        }else{
            console.log('Usr-----------',data);
            callback(data);
        }
    })
}

//list of states
module.exports.getListOfState = (callback) => {
    CityAndZipcode.find().distinct('state', function(data, err) {
        if(err){
            callback(err);
        }
        else{
            console.log('State---->',data);
            callback(data);
        }
    })
}

//list of cities
module.exports.getListOfCities = (callback) => {
    CityAndZipcode.find().distinct('city', function(data, err) {
        if(err){
            callback(err);
        }
        else{
            console.log('City---->',data);
            callback(data);
        }
    })
}

//getPostalCodeByCity
module.exports.getPostalCodeByCity = (CityData,callback) => {
    CityAndZipcode.findOne().distinct('postalCode',{ "city":CityData},function(data,err){
        if(err){
            callback(err);
        }
        else{
            console.log('PostalCode---->',data);
            callback(data);
        }
    })
}

//delete zipcode
module.exports.deletePostalCode = (PostalCode,callback) => {
    CityAndZipcode.deleteOne({ postalCode:PostalCode },function(data,err) {
        if(err){
            callback(err);
        }
        else{
            console.log('affected---->',data);
            callback(data);
        }
    })
}