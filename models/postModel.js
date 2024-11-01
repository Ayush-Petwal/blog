const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    title:{
        type : String,
        required : true,
    },
    body :{
        type : String,
        required : true, 
    },
    likes : [{
        type : Schema.Types.ObjectId,
        ref : "like",
    }],
    comments : [{
        type : Schema.Types.ObjectId,
        ref : "comment"
    }],
})

module.exports = model('post', postSchema);