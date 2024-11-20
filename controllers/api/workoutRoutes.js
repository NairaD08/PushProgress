const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Workout, Exercise } = require('../../models');

// Crste a new workout
router.post('/', async (req, res) => {
    try{
        const newWorkout = await Workout.create(req.body);
    } catch(err){
        res.status(400).json(err);
    }
});

// Review all workouts
app.get('/api/workouts', async (req, res) => {
    try{
        const workoutData = await Workout.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name'],
                }
            ],
        })
    } catch(err){
        res.status(400).json(err);
    }
  });

module.exports = router;