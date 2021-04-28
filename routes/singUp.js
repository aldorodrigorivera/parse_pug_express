const express = require('express');
const router = express.Router();
const cn = require('../controllers/singUpController')

router.get('/', cn.singUpView);
router.post('/', cn.singUp);

module.exports = router;
