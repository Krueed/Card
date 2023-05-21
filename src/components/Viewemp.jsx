import { Card, CardContent, Grid, Typography, colors } from '@mui/material'
import {React,useEffect,useState} from 'react'
import axios from 'axios'


const Viewemp = () => {
    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            setValue(value=response.data.users);
        })
      })

     
    return (

    <div>
       {
   <Grid container>
   {value.map((data,ind)=>(
       <Grid item xs={4} key={ind}>
       <Card sx={{bgcolor: 'white',borderRadius:4,margin:1}}>
           <CardContent>
               <Typography>First Name:{data.firstName}</Typography>
               <Typography>Last Name:{data.lastName}</Typography>
               <Typography>Age:{data.age}</Typography>
           </CardContent>
       </Card>
       </Grid>
   )
   )}
         </Grid>
      }
    </div>
  )

}

export default Viewemp
