var express = require('express');

var users = require('../controllers/users/index');

var router = express.Router();


router.get('/users',users.getUsers);

router.post('/users/create',users.createUser);




module.exports = router;
