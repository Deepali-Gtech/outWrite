const router = require('express').Router();
const { Category, Prompt, } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(req.params.id, {
      include: [{ model: Prompt }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Prompt }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(
      {
        id: req.body.id,
        category_name: req.body.category_name
      });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        id: req.body.id,
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id,
        }
      },
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

