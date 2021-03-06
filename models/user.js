const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
  {
    name: String,
    description: String,
    mainIngredients: String,
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    userName: String,
    bio: String,
    lifestyle: String,
    skinType: String,
    goal: String,
    products: [{ type: Schema.Types.ObjectId, ref: "product" }],
    favorites: [favoriteSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
