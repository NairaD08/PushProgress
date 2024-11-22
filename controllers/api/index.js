const router = require('express').Router();
const userRoutes = require('./userRoutes');
const progressRoutes = require('./progressRoutes');

router.use('/users', userRoutes);
router.use('/progress', progressRoutes);

module.exports = router;
