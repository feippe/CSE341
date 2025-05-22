const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:contactId', contactsController.getSingle);

router.post('/', contactsController.createContact);
router.put('/:contactId', contactsController.updateContact);
router.delete('/:contactId', contactsController.deleteContact);

module.exports = router;