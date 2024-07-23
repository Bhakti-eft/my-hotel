import React from 'react';
import { HomeList } from '../data/data';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Gallary = () => {
  return (
    <Layout>
      <Box sx={{display: "flex", flexWrap:'wrap' , justifyContent: "center"}}>
        {
         HomeList.map(gallary => (
          <Card sx={{maxWidth:"350px", diaplay: "flex" ,m:2}}>
            <CardActionArea>
              <CardMedia 
              sx={{minHeight:"400px"}} 
              component={'img'} 
              src={gallary.image} 
              alt={gallary.name} />

              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {gallary.name}
                </Typography>
                <Typography variant='body2'>
                  {gallary.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
         ))
        }
      </Box>
    </Layout>
  );
};

export default Gallary;
