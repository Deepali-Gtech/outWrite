const sequelize = require('../config/connection');
const seedQuote = require('./quoteData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedQuote();

 

  process.exit(0);
};

seedAll();
