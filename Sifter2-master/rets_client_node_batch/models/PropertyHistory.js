var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var PropertyHistory_schema = new mongoose.Schema({
    id: { type: String },
    property_key: { type: String },
    countyorparish: { type: String },
    address: { type: String },
    postal_code: { type: String },
    list_price: { type: Decimal128 },
    sq_ft_heated: { type: long },
    closeprice: { type: Decimal128 },
    sub_division_name: { type: String },
    property_year: { type: String },
    water_frontage: { type: String }
}, {
        versionKey: false
    })
autoIncrement.initialize(mongoose);
PropertyHistory_schema.plugin(autoIncrement.plugin, { model: 'PropertyHistory', startAt: 1 })
module.exports = mongoose.model('PropertyHistory', PropertyHistory_schema);