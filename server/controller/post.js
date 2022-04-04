import { response } from 'express';
import postModel from '../schema/postSchema.js';

const submitPost = async (req,res)=>{
    
    console.log(req.body);
    try{
      const post = await new postModel(req.body);
      console.log(post);
      post.save();
      res.status(200).json('Blog is saved successfully');
    }
    
    catch(error)
    {
        console.log('Error is coming from controller-POST.js');
        res.status(500).json(error);
    }
}

export default submitPost;