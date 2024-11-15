const Exercise = require("./Exercise");
const Workout = require("./Workout");
const workoutExercises = require("./workoutExercises");

Exercise.belongsToMany(Workout, {
    through: {
        model: workoutExercises,
        unique: false
    },
    foreignKey: "workout_id",
});

Workout.belongsToMany(Exercise, {
    through: {
        model: workoutExercises,
        unique: false
    },
    foreignKey: "exercise_id",
});





module.exports = { Exercise, Workout, workoutExercises };