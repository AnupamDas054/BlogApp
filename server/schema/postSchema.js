import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    username:{
      type:String,
      required:true

    },
    publishData:{
      type:Date,
      required:true,    
    }, 
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false
    },
    categories:{
        type:String,
        required:false,
    }

})

const postModel= mongoose.model('post',postSchema);
export default postModel;