import dbConnect from './../utils/dbUtil';

const mongoose = dbConnect();

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
  address: [
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
  ],
  spoc: [
    name: {
      type: String,
      required: true
    },
    
  ]
});

