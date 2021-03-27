const User = require('./User');
const Category = require('./Category');
const Prompt = require('./Prompt');
const Tag = require('./Tag');
const Quote = require('./Quote');

// Products belongsTo Category
Prompt.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Prompt, {
  foreignKey: 'prompt_id',
});

// Products belongToMany Tags (through ProductTag)
Prompt.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});


module.exports = {
  Prompt,
  Category,
  Tag,
  User,
  Quote
};