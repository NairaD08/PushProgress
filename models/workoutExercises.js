const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class WorkoutExercises extends Model {}

WorkoutExercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "workout",
                key: "workout_id",
            },
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "exercise",
                key: "exercise_id",
            }
        }
    },{
        sequelize,
        modelName: 'workoutExercises',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    }
);

module.exports = WorkoutExercises;