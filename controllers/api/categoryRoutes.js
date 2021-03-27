const router = require('express').Router();
const {  } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
  try {
    const placeHolderData = await modelInstance.findAll();
    res.status(200).json(placeHolderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single instance
router.get('/:id', async (req, res) => {
  try {
    const placeHolderData = await modelInstance.findByPk(req.params.id, {
      // JOIN table data
      include: [{ model:}]
    });

    if (!placeHolderData) {
      res.status(404).json({ message: 'No instance found with this id!' });
      return;
    }

    res.status(200).json(placeHolderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an instance
router.post('/', async (req, res) => {
  try {
    const placeHolderData = await modelInstance.create(req.body);
    res.status(200).json(placeHolderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
  try {
    const placeHolderData = await modelInstance.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!placeHolderData) {
      res.status(404).json({ message: 'No instance found with this id!' });
      return;
    }

    res.status(200).json(placeHolderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;