const { Tag } = require('../models');

const tagData = [
    {
    "id": "1",
    "tag_text": "story",
    "user_id": "1",
},
{
    "id": "2",
    "tag_text": "sci fi",
    "user_id": "2"
},
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
