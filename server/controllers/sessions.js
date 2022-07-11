import User from '../models/user.js'

export const CreateSession = (req, res) => {
  // const user = new User(req.body.userData);
  console.log('trying to Kenny Login')
  const email = req.body.userData.email
  console.log(req.body.userData.email)
  const password = req.body.userData.password
  console.log(req.body.userData.password)

  User.findOne({ email: email }).exec(function (error, user) {
    if (error) {
      console.log("error", "Email or password incorrect 1");
    } else if (!user) {
      console.log("error", "Email incorrect");
    } else if (user.password != password) {
      console.log('password incorrect')
    }
      else if (user.password = password) {
      res.send({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        fridge: user.fridge
      })
    }
  })
}

