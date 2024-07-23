import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography} from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box 
         sx={{
          my:5,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight: "bold",
            my:2,
            fontSize:'2rem'
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
          },
         }}>
        <Typography variant='h4'>
          Welcome to about Page
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolor harum necessitatibus fugit hic ex doloribus 
           obcaecati inventore quasi exercitationem aspernatur 
           distinctio sunt aliquid ab laudantium excepturi, 
           explicabo, enim voluptates quas. Fugit inventore 
           recusandae perferendis debitis aliquam deleniti 
           amet dolorum, quae corrupti, consectetur numquam 
           totam animi? Obcaecati ducimus odit voluptatum
            ipsum sit assumenda ratione, deserunt quia 
            temporibus expedita. Recusandae nobis fugiat aliquid,
             reiciendis repudiandae animi ea dolores deleniti 
             repellendus necessitatibus culpa totam veniam 
             dolorum repellat praesentium incidunt voluptatem 
             nemo iure odio maiores corrupti ad labore neque 
             fugit. Voluptates amet ipsa quo tempore,
           voluptatum vel cum dolorum minus alias a error ab!
        </p>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolor harum necessitatibus fugit hic ex doloribus 
           obcaecati inventore quasi exercitationem aspernatur 
           distinctio sunt aliquid ab laudantium excepturi, 
           explicabo, enim voluptates quas. Fugit inventore 
           recusandae perferendis debitis aliquam deleniti 
           amet dolorum, quae corrupti, consectetur numquam 
           totam animi? Obcaecati ducimus odit voluptatum
            ipsum sit assumenda ratione, deserunt quia 
            temporibus expedita. Recusandae nobis fugiat aliquid,
             reiciendis repudiandae animi ea dolores deleniti 
             repellendus necessitatibus culpa totam veniam 
             dolorum repellat praesentium incidunt voluptatem 
             nemo iure odio maiores corrupti ad labore neque 
             fugit. Voluptates amet ipsa quo tempore,
           voluptatum vel cum dolorum minus alias a error ab!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolor harum necessitatibus fugit hic ex doloribus 
           obcaecati inventore quasi exercitationem aspernatur 
           distinctio sunt aliquid ab laudantium excepturi, 
           explicabo, enim voluptates quas. Fugit inventore 
           recusandae perferendis debitis aliquam deleniti 
           amet dolorum, quae corrupti, consectetur numquam 
           totam animi? Obcaecati ducimus odit voluptatum
            ipsum sit assumenda ratione, deserunt quia 
            temporibus expedita. Recusandae nobis fugiat aliquid,
             reiciendis repudiandae animi ea dolores deleniti 
             repellendus necessitatibus culpa totam veniam 
             dolorum repellat praesentium incidunt voluptatem 
             nemo iure odio maiores corrupti ad labore neque 
             fugit. Voluptates amet ipsa quo tempore,
           voluptatum vel cum dolorum minus alias a error ab!
        </p>
        <br />

      </Box>
    </Layout>
  );
};

export default About;
