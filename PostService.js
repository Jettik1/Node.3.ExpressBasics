const Post = require('./Post')
const FileService = require('./FileService')
const fileService = new FileService();

// Здесь бизнесс логика, которая не зависит от HTTP request и HTTP response
module.exports = class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})// в объекте post добавляем новую строку picture
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    } 

    async getOne(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const post = await Post.findById(id)
        return post;
    }

    async update(post) {
        if(!post._id) {
            throw new Error('не указан id')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true}) // {new:true} чтобы вернулась обновленная версия поста
        return updatedPost;
    }
    async delete(id) {
        if (!id) {
            throw new Error('нет поста с таким id')
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}