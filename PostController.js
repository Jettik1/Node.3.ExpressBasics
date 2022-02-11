const Post = require('./Post')
const PORT = process.env.PORT || 5000
const express = require('express')
const PostService = require('./PostService')
const postService = new PostService(); // так как мы экспортируем не объект класса а класс, мы должны создать его объект


module.exports = class PostController {
    async create(req,res) {
        try {
            // const {author, title, content, picture} = req.body
            const post = await postService.create(req.body, req.files.picture)
            // res.status(200).json('Server worked')
            // res.writeHead(200, {
            //     'Content-Type': 'text/plain'
            // })
            res.json(post)
        } catch (e) { // обработка ошибки 
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {
            console.log(req.query);
            let posts;
            posts = await Post.find()
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(`<h1> ${PORT}, ${posts} </h1>`)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
            
    }
    async getOne(req, res) {
        try {
            const post = await postService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await postService.update(req.body)
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await postService.delete(req.params.id)
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}