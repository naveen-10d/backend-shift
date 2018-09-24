var RegistrationDao = require('../dao/RegistrationDao');

module.exports.signUp = (userData, callback)=>{

    RegistrationDao.signUp(userData, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })
}

module.exports.updateUser = (email, callback) =>{
    RegistrationDao.updateUser(email, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })
}


module.exports.deleteUser = (email, callback) =>{
    RegistrationDao.deleteUser(email, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })
}