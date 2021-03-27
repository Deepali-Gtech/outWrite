// import models
const User = require('./User');
// <<<<<<< models
const Category = require('./Category');
const Comment = require('./Comment');
const Prompt = require('./Prompt');
// const Tag = require('./Tag');

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

<<<<<<< Updated upstream
// Users have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Users have many Prompts
User.hasMany(Prompt, {
    foreignKey: 'user_id'
=======
// Products belongToMany Tags (through ProductTag)
Prompt.belongsToMany(Tag, {
  through: Tag,
  foreignKey: 'prompt_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Prompt, {
  through: Tag,
  foreignKey: 'tag_id'
>>>>>>> Stashed changes
});





module.exports = { User, Category, Comment, Prompt, };
// =======
const Quote = require('./Quote');

module.exports = { User, Quote };
// >>>>>>> main
