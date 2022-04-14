import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;