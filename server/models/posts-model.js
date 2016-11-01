var mongoose = require('mongoose');


const blogPostSchema = mongoose.Schema({
  title: {type:String,required: true},
  author: String
});


mongoose.model('Post', blogPostSchema);

