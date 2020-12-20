const message = require('../models/message')
const Message = require('../models/message')

function index(req, res) {
    Message.find({})
    .then((messages) => {
        res.render("messages/index", {
            user: req.userName,
            messages: messages
        })
    })
}

function create(req, res) {
    req.body.postedBy = req.user.userName
    req.body.avatar = req.user.avatar
    Message.create(req.body)
    .then(() => {
        res.redirect("/messages")
    })
}

function show(req,res) {
    Message.findById(req.params.id)
    .then((message) => {
        res.render("messages/show", {
            user: req.user.userName,
            message
        })
    })
}

function reply(req, res) {
    Message.findById(req.params.id).then((message) => {
      req.body.postedBy = req.user.userName;
      message.replies.push(req.body);
      message.save().then(() => {
        res.redirect(`/messages/${req.params.id}`);
      });
    });
  }
  


module.exports = {
    index,
    create,
    show,
    reply
}