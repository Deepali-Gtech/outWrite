const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    body: 'parent',
    parent_id: null,
    user_id: 1,
    prompt_id: 1,
  },
  {
    id: 2,
    body: 'parent',
    parent_id: null,
    user_id: 2,
    prompt_id: 1,
  },
  {
    id: 3,
    body: 'child',
    parent_id: 1,
    user_id: 1,
    prompt_id: 1,
  },
  {
    id: 4,
    body: 'second child',
    parent_id: 3,
    user_id: 1,
    prompt_id: 1,
  },
 
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;