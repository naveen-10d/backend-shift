var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var reuserSchema = new Schema({
    id:{type:Number},
    accesstype :{type:String, default:null},
    firstname :{type:String, default:null},
    middlename:{type:String, default:null},
    lastname:{type:String, default:null},
    username:{type:String, default:null},
    password:{type:String, default:null},
    languagepreference:{type:String, default:null},
    email:{type:String, unique:true},
    phonenumber:{type:String, default:null},
    screenname:{type:String, default:null},
    licenseid:{type:String, default:null},
    mustresetpassword:{type:String, default:null},
    emailConfirmation:{type:Boolean, default:false},
    percentage:{type:Number, default:null},
    enabled:{type:Boolean, default:true}
        
},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

reuserSchema.plugin(uniqueValidator);
reuserSchema.plugin(autoIncrement.plugin,{model:'reuser' , startAt:1});
var reuserDetails = mongoose.model('reuser', reuserSchema, 'Reuser');

module.exports = reuserDetails;