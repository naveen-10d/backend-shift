var AssignZipcodeDao = require('../dao/AssignZipcodeDao');

module.exports.assignZipcodeToUser = (AssignZipcodeDetails, callback)=>{
    
    AssignZipcodeDao.assignZipcodeToUser(AssignZipcodeDetails, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })
}

module.exports.getUserPostalCode = (UserId, callback) => {

    AssignZipcodeDao.getUserPostalCode(UserId, function(err,assignedusers){
        if(err){
            callback(err);
        }
        else{
            callback(data);
        }
    })
}

module.exports.getCityForUser = (_id,state, callback) => {

    AssignZipcodeDao.getCityForUser(_id,state, function(err,usercities){
        if(err){
            callback(err);
        }
        else{
            callback(usercities);
        }
    })
}

module.exports.deleteZipcodeByUser = (username,zipcode, callback) => {

    AssignZipcodeDao.deleteZipcodeByUser(username,zipcode, function(err, data){
        if(err){
            callback(err);
        }
        else{
            callback(data);
        }
    })
}