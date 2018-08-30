const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema({
  districtId: {
    type: String,
    required: true
  },
  schools:{
      name:{
          type: String,
          required: true
      },
      address:{
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zip:{
            type: Number,
            required: true
        }
      },
      geoLocation:{
        latitude:{
           type: Number,
           required: true     
        },
        longitude:{
            type: Number,
            required: true     
         }
       }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = district = mongoose.model('district', districtSchema);