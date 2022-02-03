const express = require('express')
const router = express.Router()
const logger = require('../utils/logger')

const Blog = require('../models/Blog');

router.get('/', (req, res) => {
    Blog.find({})
      .then(blog => res.status(200).json(blog))    
})

router.get('/:id', (req, res, err) => {
  const { id } = req.params
  Blog.findById(id)
    .then(blog => {
      if (blog) res.status(200).json(blog)
      res.status(404).end
    })
    .catch(err => next(err))
})

router.post('/', (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        likes: req.body.likes
    })

    blog.save()
      .then(result => res.status(201).json(result))
      .catch(err => logger.error(err))
})

module.exports = router
