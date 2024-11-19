const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      return res.status(400).json({
        message:
          'Invalid username or password. If you don’t have an account, please sign up.',
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message:
          'Invalid username or password. Please double-check your credentials or sign up if you’re new.',
      });
    }

    // Save user session
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      return res.json({ success: true });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message:
        'An error occurred while processing your request. Please try again later.',
    });
  }
});

module.exports = router;
