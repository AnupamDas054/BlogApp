require('dotenv').config()
import mongoose from 'mongoose';

const Connection = async ()=>{
  try{
      
    const url=process.env.URL;
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('MongoDB succefully Connected');
  }
  catch(error)
  {
      console.log(`database failsd ${error}`)
  }
    
}

export default Connection ;