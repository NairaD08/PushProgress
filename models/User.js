const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
    },
    last_name: {
      type: DataTypes.STRING(50),
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
    },
    height: {
      type: DataTypes.DECIMAL(5, 2),
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password_hash = await bcrypt.hash(
          newUserData.password_hash,
          10
        );
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password_hash = await bcrypt.hash(
          updatedUserData.password_hash,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);

module.exports = User;
