const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:contactId', contactsController.getSingle);

module.exports = router;