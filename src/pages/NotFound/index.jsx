import React from 'react';
import { Box, Container, Typography, Grid} from '@mui/material';

 const NotFound = () => {
  return (
    <Box
      sx={{
        width:'100%',
        margin:'0 auto',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} sx={{width:'100%',display: 'flex',flexDirection:'column',rowGap:'30px',flexWrap:'wrap'}}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
          </Grid>
       
          <Grid xs={6} sx={{width:'80%'}} >
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={'100%'} height={'auto'}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default NotFound;

