const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const { remove } = require('../models/post')

//Get back All the posts
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find()
        res.send(posts) //this iss array
    } catch (err){
        res.json({msg:err})
    }
})

//Submit a post
router.post('/',async (req,res) => {
    const post = new Post ({
        title:req.body.title,
        describe:req.body.describe
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({msg:err})
    }
})
//Search post
router.get('/:postid',async (req,res) => {
    try{
        const post = await Post.find({'title':req.params.postid})
        res.json(post)
    } catch(err) {
        res.json({msg:err})
    }
})

//Delete Posts
router.delete('/:postid',async (req,res) => {
    try{
        const removePost = await Post.remove({'title':req.params.postid})
        res.json(removePost)
    } catch(err) {
        res.json({msg:err})
    }
})

//Update Posts
router.patch('/:postid',async (req,res) => {
    try{
        const removePost = await Post.updateOne({'title':req.params.postid},{$set:{title:req.body.title}})
        res.json(removePost)
    } catch(err) {
        res.json({msg:err})
    }
})



module.exports = router;