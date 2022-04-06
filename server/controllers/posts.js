import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save()
    // 201 - successful creation
    res.status(201).json(newPost);
  } catch (error) {
    // 409 - conflict
    res.status(409).json({ message: error.message });
  }
}

export const updatePost = async (req, res) => {
  // extract id from params
  // e.g. localhost:5000/posts/123 <= id = 123, 
  // because in routes router.patch('/:id', updatePost);
  const { id: _id } = req.params;
  // new post comes from request body
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No post with given id');
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatePost);
}
