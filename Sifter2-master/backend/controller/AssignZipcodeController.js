var AssignZipcodeService = require('../service/AssignZipcodeService');

module.exports.assignZipcodeToUser = (req, res) =>{
    var AssignZipcodeDetails = req.body;
   
    AssignZipcodeService.assignZipcodeToUser(AssignZipcodeDetails, function(data, err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
}

module.exports.getUserPostalCode = (req,res) => {
    var UserId = req.params.userId;

    AssignZipcodeService.getUserPostalCode(UserId, function(data,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
}

module.exports.getCityForUser = (req,res) => {
    var _id = req.params._id;
    var state = req.params.state;

    AssignZipcodeService.getCityForUser(_id,state, function(usercities,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(usercities);
        }
    })
}

module.exports.deleteZipcodeByUser = (req,res) => {
    var username = req.params.username;
    var zipcode = req.params.zipcode;

    AssignZipcodeService.deleteZipcodeByUser(username,zipcode, function(data,err){
        console.log("");
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
}