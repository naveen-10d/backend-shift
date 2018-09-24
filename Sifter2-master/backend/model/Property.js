var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var propertySchema = new Schema({

    id:{type:Number},
    Property_key:{type:String, required:true},
    Address:{type:String, required:true},
    Postal_code:{type:String, required:true},
    List_price:{type:Number, required:true},
    Sq_ft_heated:{type:Number, required:true},
    Sub_division_name:{type:String, required:true},
    Water_frontage:{type:String, required:true},
    Year:{type:Number, required:true},
    City:{type:String, required:true},
    County:{type:String, required:true},    
    Status:{type:String, required:true},
    User_action:{type:String, required:true},
    Historical_high_sold_price_per_sq_ft:{type:Number, required:true},
    Notes:{type:String, default:null},
    legalDescription:{type:String, default:null},
    taxId:{type:String, default:null},

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

propertySchema.plugun(uniqueValidator);
propertySchema.plugin(autoIncrement.plugin,{model:'property' , startAt:1});
var propertyDetails = mongoose.model('property', propertySchema, 'Property');

module.exports = propertyDetails;