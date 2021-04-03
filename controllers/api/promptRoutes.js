const router = require('express').Router();
const { Prompt, Category, User, Comment } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
  try {
    const promptData = await Prompt.findAll( {
      // JOIN table data
      include: [{ model: Category }, { model: User }, { model: Comment }]
    });

    if (!promptData) {
      res.status(404).json({ message: 'No prompt found with this id!' });
      return;
    }

    res.status(200).json(promptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single instanceg
router.get('/:id', async (req, res) => {
  try {
    const promptData = await Prompt.findByPk(req.params.id, {
      // JOIN table data
      include: [{ model: Category }, { model: User }, { model: Comment }]
    });

    if (!promptData) {
      res.status(404).json({ message: 'No prompt found with this id!' });
      return;
    }

    res.status(200).json(promptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an instance
router.post('/', async (req, res) => {
  try {
    const promptData = await Prompt.create(
      {
        title: req.body.title,
        description: req.body.description,
        category_id: req.body.category_id,
        user_id: req.session.user_id,
      });
    res.status(200).json(promptData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const promptData = await Prompt.update({
      title: req.body.title,
      description: req.body.description,
      category_id: req.body.category_id,
      user_id: req.session.user_id,
    },
      {
        where: {
          id: req.params.id,
        },
      });
    res.status(200).json(promptData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
  try {
    const promptData = await Prompt.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!promptData) {
      res.status(404).json({ message: 'No prompt found with this id!' });
      return;
    }

    res.status(200).json(promptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;