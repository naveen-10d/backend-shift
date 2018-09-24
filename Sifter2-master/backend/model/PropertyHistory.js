var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var propertyHistorySchema = new Schema({

    id:{type:Number},
    Property_key:{type:String, required:true},
    Countyorparish:{type:String, required:true},
    Address:{type:String, required:true},
    Postal_code:{type:String, required:true},
    List_price:{type:Number, required:true},
    Closeprice:{type:Number, required:true},
    Sq_ft_heated:{type:Number, required:true},
    Sub_division_name:{type:String, required:true},
    Year:{type:Number, required:true},
    Water_frontage:{type:String, required:true},
    History_year:{type:String, required:true}

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

propertyHistorySchema.plugin(uniqueValidator);
propertyHistorySchema.plugin(autoIncrement.plugin,{model:'propertyHistory' , startAt:1});
var propertyHistoryDetails = mongoose.model('propertyHistory', propertyHistoryDetails, 'PropertyHistory');

module.exports = propertyHistoryDetails;