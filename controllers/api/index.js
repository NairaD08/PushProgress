const router = require('express').Router();
const userRoutes = require('./userRoutes');
const progressRoutes = require('./progressRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/users', userRoutes);
router.use('/progress', progressRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
