
var Reuser = require('../model/Reuser');

module.exports.signUp = (userData, callback) =>{

    var user = new Reuser(userData);
        
    user.save(function(data, err){
        if(err){
            callback(err);
        }else{
            callback(data);
            console.log('Usr-----------',data);
        }
    })
}



module.exports.updateUser = (email, callback) =>{

    Reuser.findOneAndUpdate({email:email},{$set:{emailConfirmation:false,}},{upsert:true, new:true, runValidators:true}, function(data, err){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })
}

module.exports.deleteUser = (email, callback) => {

    Reuser.findOneAndRemove({email:email}, function(data, err){
        if(err){
            callback(err);
        }else{
            callback(data);
        }
    })

}