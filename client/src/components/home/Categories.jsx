import {Button, Table, TableBody, TableCell, TableHead,TableRow,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyle = makeStyles({
    table:{
        border:'1px solid rgba(224,224,224,1)'
    },
    button:{
        width:'90%'
    },
    linkStyle:{
        color:'inherit',
        textDecoration:'none'
    }

})


const Categories = ()=>{
    const classes=useStyle();
   
    return (

        <>
            <Link to='/create' className={classes.linkStyle}>
                <Button className={classes.button} variant="contained" color="primary">Create Blog</Button>
            </Link>
        
            <Table className={classes.table}>
                <TableHead>
                    <TableRow> 
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell>
                            Music
                        </TableCell>
                        
                    </TableRow>
                    <TableRow> 
                        <TableCell>
                            Sports
                        </TableCell>            
                    </TableRow>
                    <TableRow> 
                        <TableCell>
                            Tech
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        
        </>
    );

}

export default Categories;