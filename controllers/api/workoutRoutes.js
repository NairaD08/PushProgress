const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Workout, Exercise } = require('../../models');

// Crste a new workout
router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    console.info(`${req.method} succeful`);
    res.status(201).json(newWorkout);
  } catch (err) {
    console.err(err);
    res.status(400).json({ message: 'Failed to create Workout', error: err });
  }
});

// Review all workouts
// router.get('/', async (req, res) => {
//   try {
//     const workoutData = await Workout.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['first_name', 'last_name'],
//         },
//       ],
//     });
//     res.json(workoutData);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to fetch workouts', error: err });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const dbWorkoutData = await Workout.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['weight', 'first_name', 'last_name'],
//         },
//       ],
//     });

//     if (!dbWorkoutData) {
//       res.status(404).json({ message: 'Workout not found' });
//       return;
//     }

//     const workout = dbWorkoutData.get({ plain: true });
//     res.render('userWorkouts', { workout });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to fetch workout', error: err });
//   }
// });

module.exports = router;
