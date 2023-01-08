const { max } = require('lodash');
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const StudentSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
    trim: true
  },
  rollNumber: {
    type: Number,
    required: true,
    unique: true
  },
  photo: {
    type: String
  },
  standard: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    country: String,
  },
  parents: [{
    type: ObjectId,
    ref: 'Family',
  }]
},
  { timestamps: true, }
);

module.exports = model('Student', StudentSchema);
