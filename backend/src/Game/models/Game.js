import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    userCross: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userZero: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    __v: {
      type: Number,
      select: false,
    },
    field: {
      type: [Number],
      default: [null, null, null, null, null, null, null, null, null],
    },
    status: {
      type: String,
      default: 'waiting',
    },
    playerTurn: {
      type: Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Game', gameSchema);
