const Post = require('./Post')
const PORT = process.env.PORT || 5000
const express = require('express')


module.exports = class PostController {
    async create(req,res) {
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
            const {id} = req.params 
            if (!id) {
                res.status(400).json({message: 'Id is not defined'})
            }
            const post = await Post.findById(id)
            
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if(!post._id) {
                res.status(400).json({message: 'Id is not defined'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true}) // {new:true} чтобы вернулась обновленная версия поста
            return res.json(updatedPost);
        } catch (e) {
            
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params 
            if(!id) {
                res.status(400).json({message: 'Id is not defined'})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}