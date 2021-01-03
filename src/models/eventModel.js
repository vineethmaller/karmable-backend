import mongoUtil from './../utils/MongoUtil';

const mongoose = mongoUtil.getConnection();

const eventSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Please provide a name for the event"]
  },
  organizer: {
    type: String,
    required: [true, "Organization not found"]
  },
  eventDateTime: {
    type: Date,
    required: [true, "Please mention when the event will take place"]
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
  spoc: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address']
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
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;