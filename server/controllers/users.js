const User = require('../models/users');

const UsersController = { 

  New: (req, res) => {
    res.render("users/new", {
      session: req.session.user,
      error: req.flash("error"),
    });
  },

  CreateUser: (req, res) => {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        res.status(201).redirect("/sessions/new");
      })
      
      .catch((err) => {
        if (err.code === 11000) req.flash("error", "Email taken. Better luck next time.");

        res.redirect("/users/new");

      });
  },
}

module.exports = UsersController; 