let mongoose = require('mongoose');

let favoriteSongSchema = mongoose.Schema(
  {
      title: {
          type:String,
          required:true
      },
      fileName:String,
      album:String,
      year:String,
      genre:[String],
      artistId:{
        type:mongoose.Types.ObjectId,
        required:false
      }
      
   }
);

let favoriteSong=mongoose.model('favoriteSong',favoriteSongSchema);

module.exports = favoriteSong;