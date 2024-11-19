const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
router.get('/thomas', (req, res) => {
  console.log('here');
  res.render('thomas');
});
module.exports = router;
