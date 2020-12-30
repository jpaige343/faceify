const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema ({
    commenter: String,
    text: String
}, {
    timestamps: true
})


const productSchema = new Schema ({
    name: String,
    description: String,
    mainIngredients: String,
    comments: [commentsSchema],
    contributor: [{type: Schema.Types.ObjectId, ref: "User"}],
    cost: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema);