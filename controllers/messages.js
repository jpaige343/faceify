const message = require('../models/message')
const Message = require('../models/message')

function index(req, res) {
    Message.find({})
    .populate('postedBy')
    .then((messages) => {
        res.render("messages/index", {
            user: req.user._id,
            messages
        })
    })
}

function create(req, res) {
    req.body.postedBy = req.user._id
    req.body.avatar = req.user.avatar
    Message.create(req.body)
    .then(() => {
        res.redirect("/messages")
    })
}

function show(req,res) {
    Message.findById(req.params.id)
    .populate('postedBy')
    .then((message) => { 
        console.log(message)
        res.render("messages/show", {
            user: req.user._id,
            message,

        })
    })
}

function reply(req, res) {
    Message.findById(req.params.id)
    .populate('postedBy')
    .then((message) => {
      req.body.postedBy = req.user._id
      req.body.avatar = req.user.avatar
      message.replies.push(req.body)
      message.save().then(() => {
        res.redirect(`/messages/${req.params.id}`)
      });
    });
  }
  


module.exports = {
    index,
    create,
    show,
    reply
}