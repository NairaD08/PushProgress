const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Exercise extends Model {}

Exercise.init({
    exercise_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.STRING(50),
    },
    equipment: {
        type: DataTypes.STRING(100),
    },
}, {
    sequelize,
    modelName: 'Exercises',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
});

module.exports = Exercise;