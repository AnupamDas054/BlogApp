import axios from 'axios';

const URL='http://localhost:4000'
const  callPost=async(post)=>{
     
    try{
      return  await axios.post(`${URL}/create`,post);
    }
    catch(error)
    {
        console.log(`Error in callPost ------  ${error}`);
    } 
}

export default callPost;