const like = require('../models/likeModel');
const post = require('../models/postModel');

exports.likePost = async (req, res) => {
    try{
        const {postID , user} = req.body
        const Like = new like ( {postID , user} )
        const savedLike = await Like.save()

        const updatePost = await post.findByIdAndUpdate(postID , {
            $push : {
                likes : savedLike._id
            }
        } , {new : true}).populate('likes').exec()
        res.status(200).json({
            success:true,
            post : updatePost
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
exports.unlikePost = async (req, res) => {
    try{
        const { postId , likeId } = req.body
        const deleteLike = await like.findByIdAndDelete(likeId)
        const updatePost = await post.findByIdAndUpdate(postId , {
            $pull :{ 
                likes : deleteLike._id
            }
        } , {new : true}).populate('likes').exec() 
        res.status(200).json({
            success:true,
            post : updatePost
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}