const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // Check if the user is logged in
    const loggedIn = req.session.loggedIn || false;
    const user = loggedIn ? { username: req.session.username } : null;

    // Render the homepage with the user context
    res.render('homepage', { user, loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ensure similar logic for other routes as well
router.get('/login', (req, res) => {
  // Check if the user is logged in and redirect if so
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', { loggedIn: req.session.loggedIn || false });
});

router.get('/about', async (req, res) => {
  try {
    res.render('about');
  } catch (err) {
    res.status(400).json(err);
  }
});

// The final route should look like this
router.get('/workouts', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.render('userWorkouts');
    } else {
      res.render('defaultWorkouts');
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// for testing sake I use the following
// router.get('/workouts', async (req, res) => {
//   try{
//       // res.render('userWorkouts');
//       res.render('defaultWorkouts');
//     } catch(err) {
//     res.status(400).json(err);
//   }
// });

// Main page
// router.get('/main', (req, res) => {
//   res.render('main'); // Render main.handlebars
// });

// router.get('/thomas', (req, res) => {
//   console.log('here');
//   res.render('thomas');
// });

module.exports = router;
