const Product = require('../models/product')
const user = require('../models/user')


function newProduct(req, res) {
    res.render('products/new', {err: '', user})
}

function create(req, res) {
    Product.create(req.body)
    .then(() => {
        res.redirect('/products')
    })
}

function index(req, res) {
    Product.find({})
    .then((products)=> {
        res.render('products/index', {products: products, user})
    })
}

function show(req, res) {
    Product.findById(req.params.id)
    .then((product) => {
        res.render('products/show', {product: product, user: req.user})
    })
}

function addToFavs(req, res) {
    req.user.favorites.push(req.body)
    req.user.save()
    .then(() => {
        res.redirect(`/products/${req.params.id}`)
    })
}

function removeFromFavs(req, res) {
    let idx = req.user.favorites.findIndex((p) => p._id === req.params.id)
    req.user.favorites.splice(idx, 1)
    req.user.save()
    .then(() => {
        res.redirect(`/users/profile`)
    })
}

module.exports = {
    new: newProduct,
    create,
    index,
    show,
    addToFavs,
    removeFromFavs
}