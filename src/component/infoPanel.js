import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: '0 auto',
  marginTop: 50,
  textAlign: 'center',
  color: theme.palette.text.secondary,
// background: 'black'
}));

export default function InfoPanel() {
  return (
    <Box sx={{ flexGrow: 1,   margin: '0 auto', }}>
      <Grid container spacing={3}>
        <Grid item xs={12}  md={4}>
          <Item  elevation={3}>grid 1</Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item elevation={3}>grid 1</Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item elevation={3}>grid 1</Item>
        </Grid>

      </Grid>
    </Box>
  );
}
