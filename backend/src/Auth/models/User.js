import mongoose from 'mongoose';
import crypto from 'crypto';
import _ from 'lodash';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  salt: {
    type: String,
    select: false,
  },
  countOfGames: {
    type: Number,
  },
  countOfWinGames: {
    type: Number,
  },
  countOfLostGames: {
    type: Number,
  },
});

userSchema.pre('save', function(next) {
  this.salt = crypto.randomBytes(128).toString('base64');
  this.password = this.encryptedPassword(this.password);

  next();
});

userSchema.methods.encryptedPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString();
};

userSchema.methods.checkPassword = function(password) {
  let result = false;

  if (password && this.password) {
    result = _.isEqual(this.encryptedPassword(password), this.password);
  }

  return result;
};

export default mongoose.model('User', userSchema);
