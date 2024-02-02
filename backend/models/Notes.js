const mongoose = require('mongoose');


const NotesScheama = new Schema({
   title:{
    type: String,
    required:true
   },
   desciption:{
    type: String,
    required:true,
    
   },
   tag:{
    type: String,
    default: "General"
   },
   data:{
    type: Date,
    default:Date.now
   },

  });

  module.exports = mongoose.model('notes', NotesScheama);