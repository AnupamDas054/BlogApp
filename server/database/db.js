const dotenv = require('dotenv');
import mongoose from 'mongoose';
dotenv.config();

const Connection = async ()=>{

  try{
      
    const url=process.env.URL;
    
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('MongoDB succefully Connected');
  }
  catch(error)
  {
      console.log(process.env.URL);
      console.log(`database failsd ${error}`)
  }
    
}

export default Connection ;