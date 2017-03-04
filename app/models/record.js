var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('record', new Schema({
    key: { type: String},
    value:{ type: String},
    date: { type: Date}
}));