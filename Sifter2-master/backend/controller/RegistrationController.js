var RegistrationService = require('../service/RegistrationService');

module.exports.signUp = (req, res) =>{
    var userData = req.body;
    console.log("testewgds")
    RegistrationService.signUp(userData, function(data, err){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
}

module.exports.updateUser = (req, res) =>{
     var email = req.param('email');
    RegistrationService.updateUser(email, function(data, err){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send({message:'Email Confirmation successfully'});
        }
    })
}


module.exports.deleteUser = (req, res) =>{
    var email = req.param('email');
   RegistrationService.deleteUser(email, function(data, err){
       if(err){
           res.status(500).send(err);
       }else{
           res.status(200).send({message:'User Deleted Successfully'});
       }
   })
}