const express = require('express');
const router = express.Router();
const _ = require('../middlewares/auth');
const cn = require('../controllers/profileController');

router.get('/', [_.isAuth] , cn.profile);

module.exports = router;
