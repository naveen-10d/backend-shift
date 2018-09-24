var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var fileSchema = new Schema({
    id:{type:Number},
    userId:{type:Number, required:true},
    property:{type:String, default:null},
    file_name:{type:String, default:null},
    pdf:{type:Blob, default:null}
},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

FileSchema.plugin(uniqueValidator);

FileSchema.plugin(autoIncrement.plugin,{model:'file' , startAt:1});
var FileDetails = mongoose.model('file', FileSchema, 'File');

module.exports = FileDetails;