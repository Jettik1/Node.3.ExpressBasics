const Router = require('express')
const Post = require('./Post.js')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const PostController = require('./PostController')

const router = new Router();

const postcontroller = new PostController();// если экспортировали класс, не забывайте создать объект класса

router.post('/posts', postcontroller.create)
router.get('/posts',  postcontroller.getAll)
router.get('/posts/:id',postcontroller.getOne)
router.put('/posts', postcontroller.update)
router.delete('/posts/:id', postcontroller.delete)

module.exports = router;