import * as React from 'react';
import NavBar from './NavBar' 
import Nested from './Nested'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { withTheme } from '@emotion/react';


export default function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
        '& > :not(style)': {
          m: 1,
          background: 'lightBlue',
          width: 328,
          height: 558,
          // background: '#efefef',
          textAlign: 'center',
          margin: '0 auto',
          flexDirection: 'column',
          
        },
       
      }}

    >
      <Paper elevation={0}>
      <NavBar />
        <h1>Login</h1>
           <TextField  label="Enter email"  />
           <br />
           <br />
           <TextField  label="Password"  />
           <br />
           <br />
           <Nested />
           <Button id='btn' variant="outlined">Login</Button>
          
      </Paper>
     
   
    </Box>
  );
}

//export default App;


// className={classes.paper}