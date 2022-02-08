const Router = require('express')
const Post = require('./Post.js')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const router = new Router();

router.post('/posts', async (req,res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        // res.status(200).json('Server worked')
        // res.writeHead(200, {
        //     'Content-Type': 'text/plain'
        // })
        res.json(post)
    } catch (e) { // обработка ошибки 
        res.status(500).json(e)
    }
    
})
router.get('/posts',  async (req,res) => {
    console.log(req.query);
    let posts;
    posts = await Post.find()
    res.writeHead(200, {
         'Content-type': 'text/html'
    })
    res.end(`<h1> ${PORT}, ${posts} </h1>`)
    
})
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

module.exports = router;