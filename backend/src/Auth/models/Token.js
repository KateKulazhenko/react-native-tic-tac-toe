import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import config from '../../../config/env';

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  __v: { type: Number, select: false },
});

tokenSchema.pre('save', function(next) {
  if (!this.token) {
    this.token = jwt.sign(Date.now().toString(), config.TOKEN_SECRET);
  }

  next();
});

tokenSchema.pre('findOneAndUpdate', function(next) {
  this.update({
    token: jwt.sign(Date.now().toString(), config.TOKEN_SECRET),
  });

  next();
});

export default mongoose.model('Token', tokenSchema);
