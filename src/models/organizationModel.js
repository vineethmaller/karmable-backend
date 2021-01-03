import mongoUtil from './../utils/MongoUtil';

const mongoose = mongoUtil.getConnection();

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name of your organization']
  },
  domain: {
    type: String,
    required: [true, 'Please select an appropriate domain of concern']
  },
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
  }
};