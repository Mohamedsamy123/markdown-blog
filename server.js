const express = require('express')
const router = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()
app.use(express.urlencoded({extended: false }))


app.set( "view engine" ,  "ejs")

mongoose.connect('mongodb://0.0.0.0:27017')

app.get('/' , (req ,res)=> {
    var articles = [{
        title: 'mohamed' ,
        CreatedAt : new Date ,
        description : "how to do it right"
    }]
    console.log('working')
    res.render('articles/index' , { articles : articles })
})
app. use ('/articles' , router)

app.listen(4500 , console.log ("listening"))