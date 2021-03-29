// import models
const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Prompt = require('./Prompt');
const Quote = require('./Quote');
const Tag = require('./Tag');

// Prompt belongsTo User
Prompt.belongsTo(User, {
    foreignKey: 'user_id'
});

// Prompt belongsTo Category
Prompt.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Prompts have many comments
Prompt.hasMany(Comment, {
    foreignKey: 'prompt_id'
});

// categories have many Prompts
Category.hasMany(Prompt, {
    foreignKey: 'category_id'
});

// Users have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Users have many Prompts
User.hasMany(Prompt, {
    foreignKey: 'user_id'
});

module.exports = { User, Category, Comment, Prompt, Quote, Tag};


