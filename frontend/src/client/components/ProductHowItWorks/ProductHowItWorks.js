import { Button, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium'
};

const image = {
  height: 55,
  my: 4
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        bgcolor: 'secondary.light',
        overflow: 'hidden'
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src="../../../../static/images/misty-mountains.jpg"
          alt="misty mountains"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.2
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="../../../../static/images/marina-boats.jpg"
                  alt="img1"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Placeholder description text.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="../../../../static/images/rainbow.jpg"
                  alt="img2"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Placeholder description text.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="../../../../static/images/school-of-fish.jpg"
                  alt="img3"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Placeholder description text. '}
                  {'More placeholder description text.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
