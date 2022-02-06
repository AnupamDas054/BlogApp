import express from "express";
import submitPost from '../controller/post.js'
const router= express.Router();

router.post('/create',submitPost);

export default router;