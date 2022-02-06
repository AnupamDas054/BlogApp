import React, { Component } from 'react';
import { AppBar, Toolbar,Typography,makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyle=makeStyles({
  component:{
    background:'#ffffff',
    color:'black' 
  },
  container:{
    justifyContent:'center',
    '& > *':{
      padding:20
    }
  },
  linkStyle:{
    color:'inherit',
    textDecoration:'none'
}

})

const Header=()=> {
    const classes= useStyle();
    return(
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to='/' className={classes.linkStyle}><Typography>Home</Typography></Link>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
                <Typography>Login</Typography>
            </Toolbar>
        </AppBar>
    );

  }

export default Header;