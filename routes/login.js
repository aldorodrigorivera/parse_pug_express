const express = require('express');
const router = express.Router();
const _ = require('../middlewares/auth');
const cn = require('../controllers/loginController');

router.get('/', cn.loginView);
router.post('/', cn.login);
router.get('/reset-password', cn.changePassword);
router.get('/logout', cn.logout);

module.exports = router;
