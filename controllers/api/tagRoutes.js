const router = require('express').Router();
const { Tag, Prompt, Quote } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll(req.params.id,{
      include : [{model:Prompt}, {model: Quote}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single instance
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // JOIN table data
      include: [{ model:Prompt}, {model: Quote}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an instance
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(
      {

      });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        
      },
    {
      where: {
        id:req.body.id,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;