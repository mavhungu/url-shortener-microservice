const mongoose = require('mongoose')
const {Schema} = mongoose;

const shorurlSchema = new Schema({
    original_url: {
      type: String,
      required: true
    },
    short_url: {
      type: Number,
      required: true
    }
  })
  
  module.exports = mongoose.model('Shorturl', shorurlSchema);