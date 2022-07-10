import User from '../models/user.js'
// const User = require('../models/users');

export const CreateUser = (req, res) => {
  const user = new User(req.body.userData);
  console.log("I'm in the controller, but not in control" + req.body.userData.email)

  user
    .save((err) => {
      if (err) {
        throw err
      }
    })
    .then(res.send);
}