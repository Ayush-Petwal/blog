const express = require('express')
const router = express.Router()

const {createComment} = require('../controllers/comment');
const {createPost , getAllPosts} = require('../controllers/post');
const {likePost , unlikePost} = require('../controllers/like');

router.post('/comments/create', createComment)
router.post('/post/create', createPost)
router.get('/posts', getAllPosts)
router.post('/likes/like', likePost)
router.post('/likes/unlike', unlikePost)

module.exports = router;