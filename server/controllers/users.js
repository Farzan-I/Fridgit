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

export const AddFridgeItem = (req, res) => {
  User.findByIdAndUpdate(
    req.body.userID, 
    {$push: {fridge: req.body.fridgeItem},
  }, res.send({
    addedItem: req.body.fridgeItem
  }))
}