var AssignZipcode = require('../model/AssignZipcode');

//add zipcode
module.exports.assignZipcodeToUser = (AssignZipcodeDetails, callback) =>{
    var assignZipcode = new AssignZipcode(AssignZipcodeDetails);     
    assignZipcode.save(function(data, err){
        if(err){
            callback(err);
        }else{
            console.log('Usr-----------',data);
            callback(data);
        }
    })
}

//get assigned users by userid
module.exports.getUserPostalCode = (UserId, callback) => {
    
    AssignZipcode.find(function(data, err) {
        if(err){
            callback(err);
        }
        else{
            console.log('assigned users---->',data);
            callback(data);
        }
    })
}

//get user cities by _id & state
module.exports.getCityForUser = (_id,state, callback) => {

    AssignZipcode.find().distinct('cities',{ _id:_id,state:state },function(usercities, err){
        if(err){
            callback(err);
        }
        else{
            console.log('user cities---------->',usercities);
            callback(usercities);
        }
    })
}

//delete assign user by username & zipcode
module.exports.deleteZipcodeByUser = (username,zipcode, callback) => {

    AssignZipcode.deleteMany({ username:username,zipcode:zipcode }, function(data, err){
        if(err){
            callback(err);
        }
        else{
            console.log('data---->',data);
            callback(data);
        }
    })
}