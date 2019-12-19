const express = require('express');
const AccountCtrl = require('../controllers/account');
const router = express.Router();

router
    .post('/account/login', AccountCtrl.login)
    .post('/account/register', AccountCtrl.register)
    .get('/users', AccountCtrl.users)

module.exports = router;