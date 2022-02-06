import {Grid,makeStyles} from '@material-ui/core';
import Post from './Post';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    linkStyle:{
        color:'inherit',
        textDecoration:'none'
    }
})

const Posts=()=>{
    const posts=[1,2,3,4,5,,6,7,8]
    const classes= useStyle();
    return (
        posts.map(post=>(

            <Grid lg={4} sm={5} xs={12}>
                <Link to='/details' className={classes.linkStyle}>
                   <Post/>
                </Link>
            </Grid> 
        ))
       

    );
}

export default Posts;