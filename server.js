const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Sequelize connection
const routes = require('./controllers'); // Import route controllers (this already includes userRoutes)
const helpers = require('./utils/helpers');
const { Pool } = require('pg');
require('dotenv').config();

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


// Set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes for other controllers (including userRoutes)
app.use(routes); // The userRoutes are already included under the controllers import



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
