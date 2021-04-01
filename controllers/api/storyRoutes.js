const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  // create a new tag
  try {
    const storyData = await Story.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(storyData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const storyData = await Story.update(
      {title: req.body.title,
        content: req.body.content,},
      {
      where: {
        id: req.params.id
      }
    });

    if (!storyData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(storyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;