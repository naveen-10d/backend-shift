var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var PropertyDetails_schema = new mongoose.Schema({
    id: { type: Number },
    created_by: { type: Number },
    updated_by: { type: Number },
    updated_date: { type: Date, default: Date.now() },
    price: { type: String },
    newOrOld: { type: String },
    address: { type: String },
    city: { type: String },
    postalCode: { type: String },
    subDivision: { type: String },
    difference: { type: String },
    squareFoot: { type: String },
    backOnMarket: { type: String },
    yearBack: { type: String },
    history: { type: Array }
}, {
        versionKey: false // You should be aware of the outcome after set to false
    });
autoIncrement.initialize(mongoose);
PropertyDetails_schema.plugin(autoIncrement.plugin, { model: 'PropertyDetails', startAt: 1 });
module.exports = mongoose.model('PropertyDetails', PropertyDetails_schema);
