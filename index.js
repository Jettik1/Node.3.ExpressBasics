require('dotenv').config()
const PORT = process.env.PORT || 5000
// const PORT = 5000;
const express = require('express')
const mongoose = require('mongoose')
const Post = require('./Post.js')
const router = require('./router.js')

const app = express();

app.use(express.json()) // Чтобы преобразовать POST запрос в форматье JSON
app.use('/api', router)


const DB_URL = 'mongodb+srv://Jettik1:AdminPassword@jettik1cluster.qqwhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// const startApp = async () => { // тоже самое
async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

startApp();



