var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var defaultFieldSchema = new Schema({
    id:{type:Number},
    userId:{type:Number},
    fieldName:{type:String},
    fieldValue:{type:Number},

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

defaultFieldSchema.plugin(uniqueValidator);
defaultFieldSchema.plugin(autoIncrement.plugin,{model:'defaultField' , startAt:1});
var defaultFieldDetails = mongoose.model('defaultField', defaultFieldSchema, 'DefaultField');

module.exports = defaultFieldDetails;