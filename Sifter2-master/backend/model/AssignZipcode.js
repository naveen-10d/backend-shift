var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var assignZipcodeSchema = new Schema({
    id:{type:Number},
   userId:{type:Number},
   username:{type:String},
   state:{type:String},
   city:{type:String},
   zipcode:{type:String}

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);
assignZipcodeSchema.plugin(uniqueValidator);
assignZipcodeSchema.plugin(autoIncrement.plugin,{model:'assignZipcode' , startAt:1});
var assignZipcodeDetails = mongoose.model('assignZipcode', assignZipcodeSchema, 'AssignZipcode');

module.exports = assignZipcodeDetails;  