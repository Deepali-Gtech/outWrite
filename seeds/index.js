const sequelize = require('../config/connection');
const seedQuote = require('./quoteData');
const seedCategory = require('./categoryData');
const seedPrompt = require('./promptData');
const seedTag = require('./tagData');
const seedUser = require('./userData');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');
 
  await seedQuote();
  console.log('\n----- QUOTE SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedTag();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedPrompt();
  console.log('\n----- PROMPT SEEDED -----\n');

  process.exit(0);
};

seedAll();