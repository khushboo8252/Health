const express = require('express');
const { getOperation, processData } = require('../controllers.js/bfhlController');
const validateInput = require('../middleware/validateInput');

const router = express.Router();

router.get('/', getOperation);
router.post('/', validateInput, processData);

module.exports = router;
