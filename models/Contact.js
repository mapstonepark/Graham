const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  contacts: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('contacts', contactsSchema)
