const { Category } = require('../models');

const categoryData = [
  {
    "id": 1,
    category_name: 'Fantasy',
  },
  {  
    "id": 2,
    category_name: 'horror',
  },
  {
    "id": 3,
    category_name: 'Sci-Fi',
  },
  {
    "id": 4,
    category_name: 'Romance',
  }
  
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
