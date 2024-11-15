const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Workout extends Model {}

Workout.init({
    workout_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    exercises: {
        type: DataTypes.STRING(50),
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    calories_burned: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'Workouts',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
});

module.exports = Workout;