// importing 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// creating Comment model

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    
        body: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        prompt_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'prompt',
                key: 'id',
            },
        },
     
    }, 
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
   
    
);

module.exports = Comment;