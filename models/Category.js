// importing 
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Category extends Model {}

// creating Category model
 Category.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull:false,
             primaryKey: true,
             autoIncrement: true,
         },
         name: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         sequelize,
         timestamps: false,
         freezeTableName: true,
         underscored: true,
         modelName: 'prompt', 

     }

 );

 module.exports = Category;