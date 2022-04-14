import mongoose from "mongoose";
import PostModel from "../models/PostModel.js";
import MongoClient, { ObjectId } from 'mongodb';




export const getPosts = async (req, res) => {
  MongoClient.MongoClient.connect(process.env.CONNECTION_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("myFirstDatabase");
    dbo.collection('posts').aggregate([
      {
        $lookup:
        {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
      }
    ]).toArray(function (err, response) {
      if (err) throw err;
      res.send(JSON.stringify(response));
      db.close();
    });
  });
}

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPost = new PostModel({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  await PostModel.deleteOne({ _id: new ObjectId("6256bdc70b8abf9a2bcb42c4") })
  
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  await PostModel.findByIdAndRemove(_id);
  res.json({ message: 'Post deleted successfully' });
}