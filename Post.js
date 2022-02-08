const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    // author: {type: String, required: true},
    // title: {type: String, required: true},
    // content: {type: String, required: true},
    // picture: {type: String, required: true},
    author: String,
    title: String,
    content: String,
    picture: String,
}) 

module.exports = mongoose.model('Post', Post);