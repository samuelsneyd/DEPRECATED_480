import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5
};

const ProductValues = () => {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        overflow: 'hidden',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        mt: 15,
        mb: 30,
        display: 'flex',
        position: 'relative'
      }}>
        <Box
          component={'img'}
          src={''}
          alt={'transparent image'}
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180
          }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component={'img'}
                src={'../../../../static/images/accommodation.jpg'}
                alt={'img1'}
                sx={{ height: 104 }}
              />
              <Typography variant={'h6'} sx={{ my: 5 }}>
                Luxury accommodation
              </Typography>
              <Typography variant={'h5'}>
                {'Placeholder description text. '}
                {'More placeholder description text.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component={'img'}
                src={'../../../../static/images/night-sky.jpg'}
                alt={'img2'}
                sx={{ height: 104 }}
              />
              <Typography variant={'h6'} sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant={'h5'}>
                {'Placeholder description text. '}
                {'More placeholder description text.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component={'img'}
                src={'../../../../static/images/dog.jpg'}
                alt={'img3'}
                sx={{ height: 104 }}
              />
              <Typography variant={'h6'} sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant={'h5'}>
                {'Placeholder description text. '}
                {'Placeholder description text.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductValues;
