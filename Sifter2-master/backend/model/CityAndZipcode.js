var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var cityAndZipCodeSchema = new Schema({
    id:{type:Number},
    city:{type:String, required:true},
    postalCode:{type:String, required:true},
    state:{type:String, require:true},

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);
cityAndZipCodeSchema.plugin(uniqueValidator);
cityAndZipCodeSchema.plugin(autoIncrement.plugin,{model:'cityAndZipCode' , startAt:1});
var cityAndZipCodeDetails = mongoose.model('cityAndZipCode', cityAndZipCodeSchema, 'CityAndZipCode');

module.exports = cityAndZipCodeDetails;