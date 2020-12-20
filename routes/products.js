const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/products')

router.get('/new', isLoggedIn, productsCtrl.new)
router.post('/', isLoggedIn, productsCtrl.create)
router.get('/', isLoggedIn, productsCtrl.index)
router.get('/:id', isLoggedIn, productsCtrl.show)
router.post('/:id/favs', isLoggedIn, productsCtrl.addToFavs)
router.delete('/:id/favs', isLoggedIn, productsCtrl.removeFromFavs)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  

module.exports = router;