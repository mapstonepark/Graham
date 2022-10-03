const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, contactsController.getcontacts)

router.post('/createcontact', contactsController.createContact)

router.put('/markComplete', contactsController.markComplete)

router.put('/markIncomplete', contactsController.markIncomplete)

router.delete('/deletecontact', contactsController.deleteContact)

module.exports = router