const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api', userRoutes);

module.exports = router;
