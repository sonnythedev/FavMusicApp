let mongoose = require('mongoose');

let artistSchema = mongoose.Schema(
  {
      firstName: {
          type:String,
          required:true
      },
      middleName: String,
      lastName: {
        type:String,
        required:true
      },
      stageName: String,
      genre: [String],
      country: String,
      dob: Date
   }
);

let artist=mongoose.model('artist',artistSchema);

module.exports = artist;