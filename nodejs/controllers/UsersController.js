import bcrypt from 'bcryptjs';
import UserModel from "../models/UserModel.js";
import MongoClient, { ObjectId } from 'mongodb';

export const getUserById = async (req, res) => {
  console.log(req.params)
  MongoClient.MongoClient.connect(process.env.CONNECTION_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("myFirstDatabase");
    dbo.collection('users').find({ _id: new ObjectId(req.params.id) }).toArray((err, users) => {
      let user = users[0]
      dbo.collection('posts').find({ user_id: new ObjectId(req.params.id) }).toArray(function (err, posts) {
        if (err) throw err;
        user.posts = posts
        res.send(JSON.stringify(user));
        db.close();
      });
    })
  });
}

 
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) return res.status(404).json({ message: "User already exist." });

    if (password !== confirmPassword) return res.status(404).json({ message: "Password don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}