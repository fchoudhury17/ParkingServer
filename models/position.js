var mongoose = require('mongoose');
var Schema = mongoose.Schema;
timestamps = require('mongoose-timestamp');

var AccountSchema = new Schema({
	pos: number;
	linkSession: {type: String, ref: 'Session'},
	linkedSpot: { type: Schema.Types.ObjectId, ref: 'ParkingSpot' }
});

AccountSchema.plugin(timestamps);
var Account = mongoose.model('Account', AccountSchema);

module.exports = Account