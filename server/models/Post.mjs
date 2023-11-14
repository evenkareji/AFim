import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    desc: {
      type: String,
      max: 50,
    },
    img: {
      type: String,
    },

    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);
export default Post;
