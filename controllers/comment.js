const comment = require('../models/commentModel');
const post = require('../models/postModel');

exports.createComment = async (req, res) => {
    try{
        const {postID , user , body } = req.body
        const newComment = new comment({ postID, user, body })

        const savedComment = await newComment.save()

        const updatePost = await post.findByIdAndUpdate(postID, {
            // $push is used to add the comment id to the comments array in the post model --> update operator
            $push : { 
                comments : savedComment._id
            },
        } )
        .populate("comments") // populate the comments array in the post model with the comment data
        .exec() 
        
        res.status(200).json({
            success: true,
            postID : updatePost,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}