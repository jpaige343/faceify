const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users')

router.get('/', isLoggedIn, usersCtrl.index)
router.put('/:id', isLoggedIn, usersCtrl.update)
router.get('/profile', isLoggedIn, usersCtrl.showProfile)
router.get('/:id', isLoggedIn, usersCtrl.show)
// router.get('/:id/friend', isLoggedIn, usersCtrl.addFriend)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  

module.exports = router;