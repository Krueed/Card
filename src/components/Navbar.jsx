import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          
            <Link to={'/'}><Button color="inherit" variant='contained'>Home</Button></Link>
        
          <Link to={'/add'}><Button color='inherit' variant='contained'>Add Employee</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    
  )
}

export default Navbar
