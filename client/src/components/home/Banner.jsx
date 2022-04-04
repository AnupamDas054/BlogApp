import { makeStyles,Box, Typography } from "@material-ui/core";

const userStyle =makeStyles({
    image:{
        background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x rgb(10,25,41)`,
        width: '100%',
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      
        '& :first-child':{
            fontSize:50,
            color:'#ffffff',
            padding:5,
            marginTop:100
       },
       
       '& :last-child':{
        fontSize:30,
        color:'#ffffff',

       }

    },
    
   
})
const Banner =()=>{
    
    const classes = userStyle();
    
    return (
        <Box className={classes.image}>
             <Typography>Blog</Typography>
             <Typography>Write As Your Wish</Typography>
        </Box>

    );
}

export default Banner;