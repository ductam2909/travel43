const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name']
    },
    avatar: {
      type: String,
      default: 'https://www.gravatar.com/avatar/?d=mp'
    },
    banner: {
      type: String
    },
    description: {
      type: String
    },
    detail: {
      type: String
    },
    price: {
      type: String
    },
    address: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Hotels', hotelSchema)
