const { Quote } = require('../models');

const quoteData = [
  
  {
    discription: "Educating the mind without educating the heart is no education at all.",
    
  },
  {
    discription: "Happiness is a perfume which you cannot pour on someone without getting some on yourself.",
    
  },
  {
    discription: "There are no mistakes, only happy accidents.",
    
  },
  {
    discription: "Do you hate people?”\n\n“I don't hate them… I just feel better when they're not around.",
    
  },
 
  {
    discription: "I would like to be remembered as a person who wanted to be free… so other people would be also free.",
    
  },
  {
    discription: "The only person who is educated is the one who has learned how to learn and change.",
    
  },
  {
    discription: "I am not a perfectionist, but still I seek perfection. I am not a great romantic, but yet I yearn 4 affection",
    
  },

  {
    discription: "When you are going through difficulty and wonder where God is, remember that the teacher is always quiet during the test.",
    
  },
  {
    discription: "All the darkness in the world cannot extinguish the light of a single candle.",
    
  },
  {
    discription: "I'm nobody. I'm a tramp, a bum, a hobo. I'm a boxcar and a jug of wine, and a straight razor if you get too close to me.",
    
  },
  {
  discription: "Talent wins games, but teamwork and intelligence wins championships.",
  },
];

const seedQuote = () => Quote.bulkCreate(quoteData);

module.exports = seedQuote;
