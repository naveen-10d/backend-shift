var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var ReUser_schema = new mongoose.Schema({
    id: { type: Number },
    email: { type: String },
    userPercentage: { type: Decimal128 },
    propertyPercentage: { type: String },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    subdivision: { type: String },

}, {
        versionKey: false
    })
autoIncrement.initialize('mongoose');
ReUser_schema.plugin(autoIncrement.plugin, { model: 'ReUser', startAt: 1 });
module.exports = mongoose.model('ReUser', ReUser_schema);