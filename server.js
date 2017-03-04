// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var record   = require('./app/models/record');


var config = require('./config'); // get our config file

// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req,res){
	res.render('index.html');
})


app.post('/getRecord',function(req,res){
	record.findOne({key:req.body.key},{'_id': 0},function(err,data){
		if(err)
			res.json(err);
		res.json(data);
	});
})

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
