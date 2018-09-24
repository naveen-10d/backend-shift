var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var PropertyHistory_schema = new mongoose.Schema({
    id: { type: String },
    property_key: { type: String },
    address: { type: String },
    city: { type: String },
    sub_division_name: { type: String },
    country: { type: String },
    postal_code: { type: String },
    list_price: { type: Decimal128 },
    sq_ft_heated: { type: String },
    status: { type: String },
    user_action: { type: String },
    property_year: { type: String },
    water_frontage: { type: String },
    percentSpread: { type: String },
    legalDescription: { type: String },
    taxId: { type: String }
}, {
        versionKey: false
    })
autoIncrement.initialize(mongoose);
PropertyHistory_schema.plugin(autoIncrement.plugin, { model: 'PropertyHistory', startAt: 1 })
module.exports = mongoose.model('PropertyHistory', PropertyHistory_schema);