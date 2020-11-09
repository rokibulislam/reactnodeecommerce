const express = require('express')
const router = express.Router();

const { 
    getUserById, 
    getUsers, 
    createUser,
    updateUser,
    removeProduct
} = require('../controllers/user')

router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', createUser)
router.put('/user/:id', updateUser)

module.exports = router;