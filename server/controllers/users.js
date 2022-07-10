import User from '../models/user.js'

export const CreateUser = (req, res) => {
  const user = new User(req.body.userData);

  user.save((err) => {
      if (err) {
        throw err
      }
      res.send({
        userID: user._id,
        userName: user.userName,
        fridge: user.fridge
      })
    })
}