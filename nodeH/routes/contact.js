var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var contactUser = mongoose.model('Contact');

router.post('/suggestion', function(req, res, next) {
  var contact=new contactUser();
  console.log('contactUser',req.body);
  contact.firstname=req.body.fname;
  contact.lastname=req.body.lname;
  contact.email=req.body.email;
  contact.message=req.body.message;

  contact.save(function(err,contact){
    console.log('in save');
    if(err){
    return res.send(500,err);
            }
    return res.json(contact);
           });

}
)
module.exports = router;
