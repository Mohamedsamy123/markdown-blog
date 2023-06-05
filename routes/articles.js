const express = require('express')
const router = express.Router()
const slugif = require('slugify')
const article = require ('./../models/article')
router.get("/new" , (req ,res)=> {
    res.render('articles/new')
})

router.get('/:slug' , async (req ,res)=>{
    var Article = await article.findOne( { slug :req.params.slug} )
    res.render('articles/show' , {article : Article })
})

router.post('/' , async (req ,res)=> {
    let Article = new article ({
        title: req.body.title ,
        description: req.body.description ,
        markdown:req.body.markdown

    })
    try { 
        Article1 = await Article.save() 
        res.redirect(`/articles/${Article1.slug}`)
    } catch(e) {
        console.log('failing')
    }
    

})

module.exports = router