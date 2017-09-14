var request = require('superagent');
var express = require("express");
var router = express.Router();


var doRequest = function(url, port, headers){
	//TODO set headers; set timeout
	var fullUrl = port? url+":"+port : port;
	request.get(fullUrl)	
	.end(function(err, res){
		var responseData = res.body;
		//TODO do smth smarter with the response
		validateResponse(err, res);
		return responseData;
	});

}


var validateResponse = function(){
	// TODO implement it
	return true;
}
