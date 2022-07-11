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
      console.log("Kenny Login error");
    } else if (!user) {
      console.log("error", "Email incorrect");
    } else {
        user.comparePassword(password, function (matchError, isMatch) {
          if (matchError) {
            console.log("error", "Email or password incorrect bcrypt 1");
          } else if (!isMatch) {
            console.log("error", "Email or password incorrect bcrypt 2");
          } else {
            console.log(user)
            res.send({
              _id: user._id,
              userName: user.userName,
              email: user.email,
              fridge: user.fridge
            })
          }
        });
    }
  })
}
