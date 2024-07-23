import React from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my:5,
        ml:5,
        "& h4":{
          fontWeight:"bold",
          mb:2,
        },
      }}>
        <Typography variant='h4'>Contact My Company</Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing
           elit. Incidunt voluptate reprehenderit accusantium 
           nemo laborum accusamus ea temporibus, nihil in
           cupiditate, cumque dolor rerum assumenda, 
          ipsum sed natus dolorem repellat. Provident?
        </p>
      </Box>
      <Box sx={{m:3, width:"600px", ml:5, "@media (max-width:600px)":{
        width:"300px"
      }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black", color:'white', textAlign:"center"}}>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow>
                  <TableCell>
                   <SupportAgentIcon sx={{color:'red', pt:1}}/>1800-00-0000(TollFree)
                  </TableCell>
                  </TableRow>
                  
                  <TableRow>
                  <TableCell>
                    < EmailIcon sx={{color:'skyblue', pt:1}}/>help@myhome.com
                  </TableCell>
                  </TableRow>

                  <TableRow>
                  <TableCell>
                    < CallIcon sx={{color:'green', pt:1}}/>9876543210
                  </TableCell>
                  </TableRow>

              </TableBody>

            </Table>

          </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
