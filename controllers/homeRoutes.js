const router = require('express').Router();
const {Workout, User} = require('../models');

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

router.get('/workouts', async (req, res) => {
  try {
    // Ensure the user is authenticated
    if (!req.session.loggedIn || !req.session.userId) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }

    // Retrieve workouts for the logged-in user
    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.userId, // Filter by user_id from the session
      },
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'], // Include user details
        },
      ],
    });

    // If no workouts found
    if (!workoutData.length) {
      return res.status(404).json({ message: 'No workouts found for this user.' });
    }

    // Send the workouts as JSON
    res.status(200).json(workoutData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch workouts.', error: err });
  }
});

router.get('/workout/:id', async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['weight', 'first_name', 'last_name'],
        },
      ],
    });

    if (!dbWorkoutData) {
      res.status(404).json({ message: 'Workout not found' });
      return;
    }

    const workout = dbWorkoutData.get({ plain: true });
    res.render('userWorkouts', { workout });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch workout', error: err });
  }
});

module.exports = router;
