import React,{useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {NavLink}  from 'react-router-dom';
import "../../styles/navbarStyles.css";

const Navbar = () => {
  const [mobileOpen , setMobileOpen] = useState(false)
  //Hnadle menu click
  const handleDrawer = () =>{
    setMobileOpen(!mobileOpen)
  }
  //Menu Drawer
  const drawer = (
    <Box onClick={handleDrawer} sx={{textAlign:"center"}}>
      <Typography
             color={'skyblue'} 
             variant='h6'
             component="div" 
             sx={{flexGrow:1, my:2}}>
            <RoofingRoundedIcon />
              Home Decor
            </Typography>
            <Divider/>
               <ul className='mobile-navigation'>

                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>

                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>

                <li>
                  <NavLink to={'/Gallary'}>Gallary</NavLink>
                </li>

               </ul>
            </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "white"}}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label='open drawer'
            edge="start" 
            sx={{mr:2, display:{sm:"none"},
            }}
            onClick={handleDrawer}
            >
            <MenuRoundedIcon />
            </IconButton>
            <Typography
             color={'black'} 
             variant='h6'
             component="div" 
             sx={{flexGrow:1}}>
            
            <RoofingRoundedIcon />
              Home Decor
          
            </Typography>
            <Box sx={{display:{xs:"none", sm:"block" }}}>
               <ul className='navigation-menu'>

                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>

                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>

                <li>
                  <NavLink to={'/Gallary'}>Gallary</NavLink>
                </li>

               </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer 
          variant="temporary" 
          open={mobileOpen} 
          onClose={handleDrawer}
          sx={{
            display:{xs:'block', sm:"none"},
            "& .MuiDrawer-paper":{
              boxSizing: "border-box",
              width:"240px"},
        }}
      >
          
            {drawer}
          </Drawer>
          </Box>
          <Box>
            <Toolbar/>
          </Box>
        </Box>
    </>
  );
};

export default Navbar;
