var express    = require('express');
var path         = require('path');
var config     = require('../../config/config.js');
var router  = express.Router();


router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(".") +"/app/views/login.html");
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.resolve(".") +"/app/views/login.html");
});


router.get('/home', function(req, res, next) {
  res.render('management', { data: {
                            title: "Peer BK | Management",
                            page: 'home',
                            message: "N2qv",
                            host: config.HOST,
                            rooms: config.rooms
                          }
                        });;
});

// function check_login(req, res, next) {
//   if(req.session.user) {
//     next();     //If session exists, proceed to page
//   }
//   else {
//     res.redirect('/login');
//   }
// }
module.exports = router;
