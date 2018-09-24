var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var reAuthoritySchema = new Schema({
    id:{type:Number},
    authority:{type:String, default:null}
});
