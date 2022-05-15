import * as React from 'react';
import { Button, Typography } from '@mui/material';
import ProductHeroLayout from '../ProductHeroLayout/ProductHeroLayout';

const backgroundImage = '../../../../static/images/misty-mountains.jpg';

function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h4" marked="center">
        Retreat 480
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{
          mb: 4,
          mt: {
            sx: 4,
            sm: 10
          }
        }}
      >
        Enjoy some time off in beautiful Northland scenery
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/"
        sx={{ minWidth: 200 }}
      >
        {'Book Now'}
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        {'Discover the experience'}
      </Typography>
    </ProductHeroLayout>
  );
}

export default ProductHero;
