const router = require('express').Router();
const { Category, Prompt, Quote } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(req.params.id,{
      include:[{ model: Prompt}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single instance
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN table data
      include: [{ model: Prompt}, {model: Quote}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an instance
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const categoryData = await Category.update({
      where: {
        id:req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;