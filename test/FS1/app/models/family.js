const validator = require('validator');
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const familySchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 150,
    validate: {
      validator: function (val) {
        let result = val.replace(/ /g, '');
        return validator.isAlpha(result);
      },
      message: 'Name should contain only alphabets with or without spaces'
    },
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  occupation: {
    type: String,
    min: 1,
    max: 500,
  },
  designation: {
    type: String,
    minlength: 2,
    maxlength: 500,
    trim: true,
  },
  studentId: {
    type: ObjectId,
    ref: 'Student',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},
  { timestamps: true })

familySchema.pre('save', async function save(next) {
  this.increment();
  return next();
});

module.exports = model('Family', familySchema)