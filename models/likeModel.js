const {Schema, model} = require('mongoose');

const likeSchema = new Schema({
    post:{
        type : Schema.Types.ObjectId,
        ref : "post",
    },
    user : {
        type : String,
        required : true,
    }
})

module.exports = model('like', likeSchema);