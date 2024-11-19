const router = require('express').Router();

// Login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/main');
    return;
  }

  res.render('login');
});

// Main page
router.get('/main', (req, res) => {
  res.render('main'); // Render main.handlebars
});

router.get('/thomas', (req, res) => {
  console.log('here');
  res.render('thomas');
});
module.exports = router;
