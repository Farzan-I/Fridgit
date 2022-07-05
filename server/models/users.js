import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  fridge: [String]
});

const User = mongoose.model('User', userSchema);

export default User;
