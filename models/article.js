const mongoose = require('mongoose')
const slugif = require('slugify')
const articleschema = new mongoose.Schema ({
    title : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    }, 
    markdown : {
        type : String ,
        required : true
    }
    , 
    CreatedAt: {
        type: Date ,
        default: Date.now()
    } , 
    slug : {
        
        type: String ,
        Unique: true
    }
})

articleschema.pre('validate' , function (next) {
     
        this.slug =slugify (this.title , {lower : true , strict : true})
    
    next()
})
module.exports = mongoose.model('article' , articleschema) 