var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({

	firstname			: String,
	lastname			: String,
	email				: String,
	message				: String,

});

mongoose.model('Contact',ContactSchema);
