var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(email === 'admin@gmail.com' && password === 'password') {
    req.session.user = {
      email:email,
      role:'admin',
      name:'Hoang'
    };
    
    res.render('dashboard', { title: 'Dashboard', username: email });
  } else {
    res.render('login', { title: 'Login Page', error: 'Invalid credentials' });
  }
});

router.get('/logout', function(req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.render('index', { title: 'Express', message: 'Logged out successfully' });
  });
});


module.exports = router;
