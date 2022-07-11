import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String, 
    required: true,
    unique: true,
  },

  fridge: {
    type: [String]
  }

});

const User = mongoose.model('User', userSchema);

export default User;