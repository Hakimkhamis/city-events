var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let EventTable = new Schema({
  eventId: Number,
  eventName: String
});

module.exports = mongoose.model('Event', EventTable);