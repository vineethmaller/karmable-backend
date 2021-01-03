const mongoUtil = require('./../utils/MongoUtil');
const validator = require('validator');

const mongoose = mongoUtil.getConnection();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name']
  },
  email: {
    type: String,
    required: [true, "Please provide a email address"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  phone: {
    ext: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true,
    }
  },
  bloodGroup: String,
  address: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;