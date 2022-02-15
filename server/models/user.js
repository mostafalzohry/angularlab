const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,


  },
  password : {
    type : String,
  }
})

const user = mongoose.model('user', userSchema)

module.exports = user;
