// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var postSchema = mongoose.Schema({
    title           : String,
    summary         : String,
    link            : String,
    adder           : String,
    comments        : [String],
    tags            : [String],
    imgUrl          : String, 
    sourceUrl       : String, 
    img: { data: Buffer, contentType: String },
    

}, {timestamps: true} );


// tags will have an array of tags

// create the model for users and expose it to our app
module.exports = mongoose.model('Post',postSchema);
