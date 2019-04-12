// coaches.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Coaches = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    civility: {
      type: String,
    },
    speciality: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    company: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: String,
    },
    pictures: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: 'coaches',
  }
)

module.exports = mongoose.model('Coaches', Coaches)