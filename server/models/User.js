import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 1,
      max: 15,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      min: 6,
      max: 50,
    },
    googleId: {
      type: String,
      required: false,
    },
    method: {
      type: [
        {
          type: String,
          enum: ['local', 'google'],
        },
      ],
      required: true,
    },
    profileImg: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 10,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
