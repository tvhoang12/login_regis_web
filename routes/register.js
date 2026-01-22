var express = require('express');
var router = express.Router();

/* GET registration page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const fullname = req.body.fullname;

  // just a mock registration process
  res.render('login', { title: 'Login Page', message: 'Registration successful. Please log in.' });
});

module.exports = router;