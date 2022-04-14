import express from "express";
import { signup ,getUserById } from "../controllers/UsersController.js";

const router = express.Router();

router.post('/signup', signup);
router.get('/get-user-by-id/:id', getUserById);

export default router;