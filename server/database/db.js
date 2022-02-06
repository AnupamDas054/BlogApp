import mongoose from 'mongoose';

const Connection = async ()=>{
  try{
      
    const url='mongodb+srv://dimitri:V7I3vgw4W8EEwEFR@blogapplication.q0hkw.mongodb.net/PROJECT0?retryWrites=true&w=majority';
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('MongoDB succefully Connected');
  }
  catch(error)
  {
      console.log(`database failsd ${error}`)
  }
    
}

export default Connection ;