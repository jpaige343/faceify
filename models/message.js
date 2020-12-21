const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
    postedBy: String,
    avatar: String,
    content: String,
    postedById: String
}, {
    timestamps: true
})

const messageSchema = new Schema({
    postedBy: {type: Schema.Types.ObjectId, ref: "User"}, 
    avatar: String,
    content: String,
    replies: [replySchema],
}, {
    timestamps: true
})



module.exports = mongoose.model("Message", messageSchema)