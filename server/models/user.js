import mongoose from "mongoose";
import bcrypt from "bcryptjs";

let collectionName = 'User'
export const setCollectionName = (collection) =>{
  collectionName = collection 
}

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

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};

const User = mongoose.model(collectionName, userSchema);

export default User;