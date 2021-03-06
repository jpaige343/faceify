const user = require('../models/user')
const User = require('../models/user')
const Product = require('../models/product')


function index(req, res) {
    user.find({}).then((users) => {
        res.render('users/index', {user: req.user, users})
    })
}

function showProfile(req, res) {
    User.findById(req.params.id)
    .then((user, product) => {
        res.render('users/profile', {title: 'Update Profile', user: req.user, product})
    })
    .catch((err) => {
        console.log(err)
      })
}

function update(req,res) {
    User.findByIdAndUpdate(req.user._id, req.body, user)
    .then(() => {
        res.redirect(`/users/profile`)
    })
    .catch((err) => {
        console.log(err)
      })
    
}

function show(req, res) {
    User.findById(req.params.id)
    .then((userInfo) => {
        Product.find({favorites: userInfo._id})
        .then((favorites, products) =>{
            res.render(`users/show`, {
                userInfo,
                user: req.user,
                favorites,
                products
            })
        })
    })
}





module.exports = {
    index,
    show,
    update,
    showProfile,
    // addFriend
}
