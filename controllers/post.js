const post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try{
        const {title , body } = req.body
        const newPost = new post({ title, body })
        await newPost.save()
        
        res.status(200).json({
            success: true,
            post : newPost,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error while creating post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await post.find()
        .populate("comments")
        .populate("likes")
        .exec()
        
        res.status(200).json({
            success: true,
            posts : posts,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error while fetching posts"
        })
    }
}