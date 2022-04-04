import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        margin:16,
        height:400,
        borderRadius:10,
        border:'1px solid #e6e6e6',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        //width:'30%',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        
        '& > *':{
            padding:"0 0 10px 10px"
        },
        transition:'0.9s ease',
        cursor:'pointer',
        '&:hover':{
            transform:'scale(1.1)',

        }
    },
   
    image:{
        height:200,
        width:"100%",
        objectFit:'cover',
        borderRadius:"10px 10px 0 0"
        
    },
    text:{
        fontWeight:800,
        fontStyle:'bold',
    }
});
const Post =()=>{

  const classes = useStyles();
  
  const url ='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  return(

    <div className={classes.container}>
       <img className={classes.image} src={url} alt="post" />
        <Typography className={classes.text}>Music</Typography>
        <Typography>Learn the Music</Typography>
        <Typography> <span className={classes.text}>Author: </span> David Malan</Typography>
        <Typography>Music is the most important cultures aspect. this is the most important aspect ....</Typography>


    </div>

     
  );

}
export default Post;