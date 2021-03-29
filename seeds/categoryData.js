const { Category } = require('../models');

const categoryData = [
  {
    name: 'Fantasy',
  },
  {  
    name: 'horror',
  },
  {
    name: 'Sci-Fi',
  },
  {
    name: 'Romance',
  }
  
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
