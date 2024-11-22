const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Sequelize connection
const routes = require('./controllers'); // Import route controllers (this already includes userRoutes)
const helpers = require('./utils/helpers');
const userRoutes = require('./controllers/api/userRoutes'); // Correct path to your userRoutes file
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Express session configuration
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000, // Adjust session expiry time if needed
    httpOnly: true,
    secure: false, // Set true if you're using https
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Route for homepage
app.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn || false;
    const user = loggedIn ? { username: req.session.username } : null;
    res.render('homepage', { user, loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ensure all routes pass `user` and `loggedIn` status
app.get('/workouts', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn || false;
    const user = loggedIn ? { username: req.session.username } : null;
    res.render('userWorkouts', { user, loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/about', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn || false;
    const user = loggedIn ? { username: req.session.username } : null;
    res.render('about', { user, loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a workout
app.delete('/api/workout/:workout_id', (req, res) => {
  const sql = `DELETE FROM progress WHERE workout_id = $1`;
  const params = [req.params.workout_id]; // Fixed id reference

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: 'Workout not found',
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.rowCount,
        id: req.params.workout_id,
      });
    }
  });
});

// Read list of all workouts and associated activity type using LEFT JOIN
app.get('/api/activity-type', (req, res) => {
  const sql = `SELECT workouts.activity_type AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// BONUS: Update review
app.put('/api/review/:id', (req, res) => {
  const sql = `UPDATE reviews SET review = $1 WHERE id = $2`;
  const params = [req.body.review, req.params.id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: 'Workout not found',
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.rowCount,
      });
    }
  });
});

// Set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes for other controllers (including userRoutes)
app.use('/api/users', userRoutes); // This maps your routes to /api/users/
app.use(routes); // The userRoutes are already included under the controllers import

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
