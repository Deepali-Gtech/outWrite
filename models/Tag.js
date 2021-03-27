const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model { }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNulll: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_text: {
            type: DataTypes.STRING,
            allowNulll: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }

);
module.exports = Tag;