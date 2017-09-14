var mongoose = require('mongoose');

var ApplicationSchema = new mongoose.Schema(
    {
        name: {type: String, required:true},
		url: {type: String, required:true}	
    }
);

module.exports = mongoose.model("Application",ApplicationsSchema);