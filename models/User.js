const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
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
    type: DataTypes.ENUM("Male", "Female", "Other"),
  },
  height: {
    type: DataTypes.DECIMAL(5, 2),
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
  },
},
{
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    underscored:true,
    timestamps: false,
}
);

module.exports = User;