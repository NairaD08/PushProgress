const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Progress extends Model {}

Progress.init({
    progress_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    weight: {
        type: DataTypes.DECIMAL(5, 2),
    },
    body_fat_percentage: {
        type: DataTypes.DECIMAL(5, 2),
    },
}, {
    sequelize,
    modelName: 'Progress',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
});

module.exports = Progress;