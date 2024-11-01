const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    post:{
        type : Schema.Types.ObjectId,
        ref : "post",
    },
    user : {
        type : String,
        required : true,
    },
    body :{
        type : String,
        required : true,
    },
})

module.exports = model('comment', commentSchema);