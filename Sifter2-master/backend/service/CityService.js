var CityDao = require('../dao/CityDao');

module.exports.addZipCode = (ZipCodeData, callback)=>{
    
    CityDao.addZipCode(ZipCodeData, function(err, zipcodedata){
        if(err){
            callback(err);
        }else{
            callback(zipcodedata);
        }
    })
}

module.exports.getListOfState = (callback) => {
    
    CityDao.getListOfState(function(err,statedata){
        if(err){
            callback(err);
        }
        else{
            callback(statedata);
        }
    })
}

module.exports.getListOfCities = (callback) => {
    
    CityDao.getListOfCities(function(err,citiesdata){
        if(err){
            callback(err);
        }
        else{
            callback(citiesdata);
        }
    })
}

module.exports.getPostalCodeByCity = (CityData,callback) => {

    CityDao.getPostalCodeByCity(CityData,function(err,postalcodedata){
        if(err){
            callback(err);
        }
        else{
            callback(postalcodedata);
        }
    })
}

module.exports.deletePostalCode = (PostalCode,callback) => {
    
    CityDao.deletePostalCode(PostalCode,function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(data);
        }
    })
}