const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
      attributes: ['user_id', 'username', 'password_hash'],
    });

    if (!userData) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password_hash
    );

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // Save user session
    req.session.save(() => {
      req.session.userId = userData.user_id;
      req.session.username = userData.username; // Save username
      req.session.loggedIn = true;

      return res.json({ success: true });
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'An error occurred. Please try again later.' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error during logout' });
      }
      res.status(204).end(); // Successful logout (no content returned)
    });
  } else {
    res.status(404).json({ message: 'Not logged in' }); // If user isn't logged in
  }
});

module.exports = router;
