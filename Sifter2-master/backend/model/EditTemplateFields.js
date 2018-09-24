var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var editTemplateFieldSchema = new Schema({

    id:{type:Number},
    sellerName:{type:String, default:null},
    buyerName:{type:String, default:null},
    address:{type:String, default:null},
    location:{type:String, default:null},
    description:{type:String, default:null},
    mail:{type:String, default:null},
    purchasePrice:{type:String, default:null},
    initialPrice:{type:String, default:null},
    balanceClose:{type:String, default:null},
    closingDate:{type:Date, default:null},
    assumption:{type:String, default:null},
    purchaseMoney:{type:String, default:null},
    buyersIni:{type:String, default:null},
    sellerD:{type:String, default:null},
    buyerD:{type:String, default:null},
    miami:{type:String, default:null},
    sellerPI:{type:String, default:null},
    sellerPA:{type:String, default:null},
    buyerFullName:{type:String, default:null},
    warranty:{type:String, default:null},
    propertyInspection:{type:String, default:null},
    taxID:{type:String, default:null}
},{
    versionKey:false
});
autoIncrement.initialize(mongoose);

editTemplateFieldSchema.plugin(uniqueValidator);
editTemplateFieldSchema.plugin(autoIncrement.plugin,{model:'editTemplateFieldSchema' , startAt:1});
var editTemplateFieldDetails = mongoose.model('editTemplateFieldSchema', editTemplateFieldSchema, 'EditTemplateField');

module.exports = editTemplateFieldDetails;