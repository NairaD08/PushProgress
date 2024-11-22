const Exercise = require('./Exercise');
const Workout = require('./Workout');
const User = require('./User');
const Progress = require('./Progress');
const workoutExercises = require('./workoutExercises');
const sequelize = require('../config/connection');

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced!');
});

Exercise.belongsToMany(Workout, {
  through: {
    model: workoutExercises,
    as: 'workouts',
    unique: false,
  },
  foreignKey: 'workout_id',
});

Workout.belongsToMany(Exercise, {
  through: {
    model: workoutExercises,
    as: 'exercises',
    unique: false,
  },
  foreignKey: 'exercise_id',
});

module.exports = { Exercise, Workout, workoutExercises, User, Progress };
