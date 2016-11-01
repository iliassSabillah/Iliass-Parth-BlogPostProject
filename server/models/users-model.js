var mongoose = require('mongoose');

const blogUsersSchema = mongoose.Schema({
  name: {type:String,required: true},
  email: String,
  password: String
});

mongoose.model('Users', blogUsersSchema);