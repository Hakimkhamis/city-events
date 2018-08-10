var mongojs = require('mongojs');
var Schema = mongojs.Schema;
let EventTable = new Schema({
  eventId: Number,
  eventName: String
});

module.exports = mongoose.model('Event', EventTable);