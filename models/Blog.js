const { Schema, model } = require('mongoose')

const blogShema = new Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

// ID parser to JSON
blogShema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Blog = model('Blog', blogShema)

module.exports = Blog
