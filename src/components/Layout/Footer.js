import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
   <Box 
   sx={{textAlign:'center', 
   bgcolor:'white' , 
   color:'black', 
   p :1}}>

    <Box sx={{ 
        my:1, 
        "& svg":{
           fontSize:"40px",
           cursor: "pointer",
        },
        "& svg:hover":{
            color:'skyblue',
            transform:'translateX(5px)',
            transition:'all 400ms' 
        },
    }}>

     {/*Icons*/}
     <InstagramIcon />
     <TwitterIcon />
     <GitHubIcon />
     <YouTubeIcon />
    </Box>
    <Typography 
    variant='h6' 
    sx={{"@media (max-width:600px)":{
    fontSize:'1rem'
    }}}>
        All Rights Reserved &copy; TechSoft IT
    </Typography>
   </Box>
    </>
  );
};

export default Footer;
