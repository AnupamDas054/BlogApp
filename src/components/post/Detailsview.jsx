import {Box,makeStyles,Typography} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';

const useStyle=makeStyles((theme)=>({
     container:{
      
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0,
            margin:0
        }
     },
     imageStyle:{
        
        height:'50vh', 
        width:"100%",
        objectFit:'cover'
     },
     buttonsStyle:{
         float:'right',
         padding:10
     },
     editIconStyle:{
         border:'1px solid #878787',
         borderRadius:10,
         padding:7,
         color:'blue'

     },
     deleteIconStyle:{
          marginTop:5,
          marginLeft:5,
          border:'1px solid #878787',
          borderRadius:10,
          padding:7,
          color:'red'

     },
     heading:{
         fontSize:40,
         forntWeight:600,
         marginTop:'50px',
         textAlign:'center',
         [theme.breakpoints.down('md')]:{
             margin:'50px',
             fontSize:30
         }
     },
     middlecontainer:{
         color:'#878787',
         display:'flex',
         justifyContent:'space-between',
         [theme.breakpoints.down('xs')]:{
            display:'block',

        }
     },
     content:{
         margin:"30px 0",
        textAlign: 'justify',
        textJustify: 'inter-word'
     }
}))

const Detailsview=()=>{
   
    const classes= useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    
    return (
        <Box className={classes.container}>
            <img src={url} alt=""  className={classes.imageStyle}/>
            <Box className={classes.buttonsStyle}>
               <Edit className={classes.editIconStyle}/>
               <Delete className={classes.deleteIconStyle}/>
            </Box>
            <Typography className={classes.heading}>Title of the Blog </Typography>
           
             <Box className={classes.middlecontainer}>
                 <Typography><span style={{fontWeight:800,fontStyle:'italic'}}>Author:</span>adimitri007</Typography>
                 <Typography>Date:22/12/2021</Typography>
             </Box>
             <Typography className={classes.content}>This is a blog from DimitriThisis a blog from Dimitri this is jlkjlksdjflk jlfjsadjflkjasdlkfjl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit incidunt accusamus a voluptatum enim maiores nobis sapiente. Culpa, ratione similique reiciendis sequi veritatis adipisci quasi delectus a? Ex harum iure consectetur praesentium facere sapiente facilis a explicabo doloribus itaque nemo rerum dolorem laudantium ipsam debitis modi vitae officiis dolores accusantium, in repudiandae! Delectus tenetur tempora amet sint quae id similique, qui itaque recusandae ratione, voluptates, provident voluptate repellendus. Quam accusamus repudiandae labore? Debitis quaerat numquam alias enim odit voluptates expedita, necessitatibus voluptas in facere? Quibusdam odio illo perferendis assumenda tenetur quam, libero non nisi eveniet nostrum voluptatibus dignissimos alias vitae voluptate eligendi suscipit earum ex soluta temporibus! At, beatae? Doloremque illo expedita fuga fugit, quam, porro hic minus at error illum facere culpa corrupti, quibusdam quis tempore nam atque ut provident! Nemo temporibus provident earum. Quasi est explicabo officia eos sequi iusto hic quae. Doloribus voluptas aliquam neque numquam obcaecati ipsa suscipit quibusdam non quod, voluptatum veniam aperiam facere illum esse minima fugit nemo dolores deserunt architecto mollitia est inventore ex sequi veritatis. Velit, quae voluptates. Magni voluptate culpa at corporis similique accusamus omnis ratione error eaque, veniam repellendus, tempore facilis unde atque quos cumque consequatur fugit obcaecati illo iste? Nam, odit? Adipisci voluptatum delectus sit fugit veritatis excepturi iusto inventore atque, nihil natus aspernatur facilis odit odio quasi officia quas doloribus nostrum, fuga quam cupiditate? Inventore voluptate nostrum ipsa cum voluptatibus, recusandae quos, explicabo voluptatem quaerat eveniet, deserunt perferendis necessitatibus obcaecati. Vero ducimus illo quos provident, veniam voluptas obcaecati eius fugit rerum voluptates? Molestiae ducimus, adipisci repellendus consequuntur dolores minima veniam porro ipsum ea? Ad eius accusamus ex rem sint totam saepe nihil! Ut voluptatibus, blanditiis ab dolorum quos labore natus unde provident deserunt magnam doloribus officiis nulla ipsa laboriosam reprehenderit error amet eius dignissimos cupiditate enim, alias, incidunt sunt. Ducimus est magnam quisquam et quod, necessitatibus temporibus quos maxime dicta cupiditate esse! Quae quibusdam ea laudantium accusantium quo reiciendis doloribus placeat repudiandae ipsa! Eligendi dolores voluptas tempore fugit ipsam cumque totam veniam consequuntur natus eius commodi quae repellat amet alias adipisci facilis aperiam ut nesciunt exercitationem, harum esse eveniet consequatur itaque. Aut eveniet iste eligendi praesentium, blanditiis a veniam quas dolores officiis placeat iusto? Repudiandae expedita voluptatibus ab iste tempora in doloremque! Repellendus eius placeat quidem rerum eveniet voluptate error ab autem exercitationem ratione. Repudiandae explicabo doloremque porro aliquam. Asperiores, aliquid consectetur quae pariatur possimus atque odit, voluptates neque voluptate laboriosam, enim recusandae praesentium impedit. A, cumque in. Voluptate impedit sunt perferendis saepe quasi pariatur dignissimos dicta praesentium labore aliquam architecto velit quae voluptates, quis itaque sapiente similique numquam eligendi qui. Deserunt minima veritatis rerum, a necessitatibus quisquam repellendus quasi, fugiat reiciendis assumenda deleniti id similique maiores eaque ex cum culpa consequatur tempora odio. Quisquam, officia? Eius voluptatum eligendi praesentium nam sequi eos illo dolore doloremque velit. Porro perferendis, aut consectetur blanditiis asperiores nisi sequi, et ratione illum consequatur corporis quae. Quibusdam rerum incidunt nesciunt deserunt est inventore optio obcaecati soluta quia ducimus reprehenderit, officiis labore! Illum.
             </Typography>
        </Box>
    )
}

export default Detailsview; 

