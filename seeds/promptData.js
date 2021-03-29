const {Prompt} = require('../models')

const promptData = [
    {
    "description": "The ships hung in the sky in much the same way that bricks don't.",
    "category_id": "3",
    "user_id": "1",
    "title":"ship"
},
{
    "description": "You showed me how insufficient were all my pretensions to please a woman worthy of being pleased.",
    "category_id": "4",
    "user_id": "1",
    "title":"insufficient"
},
{
    "description": "We all go a little mad sometimes",
    "category_id": "2",
    "user_id": "2",
    "title":"mad"
},
]

const seedPrompt = () => Prompt.bulkCreate(promptData);

module.exports = seedPrompt;