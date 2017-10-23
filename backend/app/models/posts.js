// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var postSchema = mongoose.Schema({
    title           : String,
    url             : String,
    link            : String,
    img: { data: Buffer, contentType: String }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Post',postSchema);
