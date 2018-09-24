var CityService = require('../service/CityService');

module.exports.addZipCode = (req, res) =>{
    var ZipCodeData = req.body;
   
    CityService.addZipCode(ZipCodeData, function(zipcodedata, err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(zipcodedata);
        }
    })
}


module.exports.getListOfState = (req,res) => {
   
    CityService.getListOfState(function(statedata,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(statedata);
        }
    })
}

module.exports.getListOfCities = (req,res) => {
   
    CityService.getListOfCities(function(citiesdata,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(citiesdata);
        }
    })
}

module.exports.getPostalCodeByCity = (req,res) => {

    var CityData = req.params.city;
    CityService.getPostalCodeByCity(CityData,function(postalcodedata,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(postalcodedata);
        }
    })
}

module.exports.deletePostalCode = (req,res) => {

    var PostalCode = req.params.postalCode;
    CityService.deletePostalCode(PostalCode,function(data,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
}