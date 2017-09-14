var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//TODO return all the applications

	var result = "/application";
	var error = "none";
	res.status(200);
	res.send(JSON.stringify({"result":result, "error": error}));

});


router.post("/", function (req, res, next) {
	//TODO actually create it
	var result = req.body;
	var error = "none";
	res.status(201);
	res.send(JSON.stringify({"result":result,"error":error}));
});


module.exports = router;
