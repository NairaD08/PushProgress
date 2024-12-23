const Exercise = require('./Exercise');
const Workout = require('./Workout');
const User = require('./User');
const Progress = require('./Progress');
const workoutExercises = require('./workoutExercises');

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

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Workout.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Exercise, Workout, workoutExercises, User, Progress };
