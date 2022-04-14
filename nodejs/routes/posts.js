import express from "express";
import { getPosts, createPosts, deletePost } from "../controllers/PostsController.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.get('/:id', deletePost);


export default router;