const express = require('express');
const router = express.Router();
const {
    getAllUsers,
} = require('../controllers/userController');

router.route('/')
    .get(getAllUsers)
// .post();

// router.route('/:id')
//     .get()
//     .patch()
//     .delete()

module.exports = router;

