const router = require('express').Router();
const { Prompt, Category, Tag } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
  try {
    const promptData = await Prompt.findAll(req.params.id,);
    res.status(200).json(promptData );
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single instanceg
router.get('/:id', async (req, res) => {
  try {
    const promptData  = await Prompt.findByPk(req.params.id, {
      // JOIN table data
      include: [{ model: Category}, {model: Tag}]
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
    const promptData = await Prompt.create(req.body);
    res.status(200).json(promptData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/', async (req, res) => {
  try {
    const promptData = await Prompt.update({
      where: {
        id:req.body.id,
      },
    });
    res.status(200).json(promptData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
  try {
    const promptData= await Prompt.destroy({
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