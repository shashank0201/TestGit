var express = require('express');
var router = express.Router();


var User = require('../models/registrationModel');

/* register user */
router.get('/register', function(req, res, next) {
  res.send('register');
});

/* login user */
router.get('/login', function(req, res, next) {
  res.send('login');
});

/* register user */
router.post('/register', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  var email=req.body.email;
  var contact=req.body.contact;


// Validation
	req.checkBody('usernmae', 'UserName is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('contact', 'Contact is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	/*req.checkBody('password2', 'Passwords do not match').equals(req.body.password);*/

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			username: username,
			password: password,
			email:email,
			contact:contact
			
			
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		//req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}

});


//submit feedback


router.post('/register', function(req, res){
    var collection = db.get('contact');
    collection.insert({
	         firstname:req.body.username,
			 lastname:req.body.password,
			 email:req.body.email,
			 message:req.body.message
    }, function(err, contact){
        if (err) throw err;
 
        res.json(contact);
    });
});




		  


module.exports = router;
