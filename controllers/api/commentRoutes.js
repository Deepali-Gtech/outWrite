const router = require('express').Router();
const { Comment, Category, User, Prompt } = require('../../models');

// GET all data of instance
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            // JOIN table data
            include: [{ model: Category }, { model: User }, { model: Prompt }]
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single instanceg
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            // JOIN table data
            include: [{ model: Category }, { model: User }, { model: Prompt }]
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE an instance
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(
            {
                body: req.body.body,
                category_id: req.body.category_id
            });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.put('/', async (req, res) => {
    try {
        const commentData = await Comment.update(
            {
                body: req.body.body,
                category_id: req.body.category_id
            },
            {
                where: {
                    id: req.params.id,
                },
            });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE an instance
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;