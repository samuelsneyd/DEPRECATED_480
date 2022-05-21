import * as React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/config';
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
        alt={'increase priority'}
      />
      <Typography color="inherit" align="center" variant="h4" marked="center" sx={{
        mb: {
          xs: 8,
          sm: 10
        }
      }}>
        {config.siteName}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{
          mb: 4
        }}
      >
        {config.siteSubtitle}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={Link}
        to={'/book/'}
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
