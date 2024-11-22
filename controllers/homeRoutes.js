const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/homepage');
  //   return;
  // }
  res.render('login');
});

router.get('/about', async (req, res) => {
  try {
    res.render('about');
  } catch (err) {
    res.status(400).json(err);
  }
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
