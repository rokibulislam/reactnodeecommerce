const express = require('express')
const router = express.Router();

const { getCategoryById, getCategories, createCategory, updateCategory, removeCategory  } = require('../controllers/category')

router.get('/categories', getCategories)
router.get('/category/:id', getCategoryById)
router.post('/category', createCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', removeCategory)

module.exports = router;