import {Box,makeStyles,Typography,FormControl, InputBase,Button, TextareaAutosize} from '@material-ui/core';

import { AddCircle } from '@material-ui/icons';
import { useState } from 'react';
import callPost from '../../services/api';
import {useNavigate} from 'react-router-dom'
const useStyle=makeStyles((theme)=>({
    container:{
        padding:'0 80px',
       [theme.breakpoints.down('md')]:{
           padding:0,
           margin:0
       }
    },
    imageStyle:{
       
       height:'50vh', 
       width:"90%",
       objectFit:'cover'
    },
    form:{
        padding:'0 80px',
       [theme.breakpoints.down('md')]:{
           padding:0,
           margin:0
       },

       display:'flex',
       flexDirection:'row',
       margin:10

    },
    textField:{
        marginLeft:10,
        marginRight:10,
        flex:1,//for writing in whole line
        fontSize:25,
        border:'1px solid #878787'
        
    },
    textareacontent:{
        width:"85%",
        marginLeft:'133px',
        border:'none',
        fontSize:20,
        '&:focus-visibie':
        {
            outline:'none'
        }
        
    }
    
}))

const initialValues={
    username:'anupam',
    publishData:new Date(),
    title:'',
    description:'',
    image:'',
    categories:''

}

const Createpost=()=>{
    const [post, setPost]=useState(initialValues);
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const classes = useStyle();
    const navigate= useNavigate();
    const handleClick=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const savePost= async()=>{
        await callPost(post);
        navigate('/');
    }
    return(

        <box className={classes.container}>
            <img src={url} alt="banner" className={classes.imageStyle}/>
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>
                <InputBase 
                 onChange={(e)=>handleClick(e)} 
                 placeholder='Title' 
                 className={classes.textField}
                 name="title"/>  
                <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>
            <TextareaAutosize 
            onChange={(e)=>handleClick(e)} 
            minRows={7} 
            placeholder='Write your blog' 
            className={classes.textareacontent}
            name="description"/>

        </box>
    );
}

export default Createpost;