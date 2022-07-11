import React from 'react';
import { Paper } from '@mui/material';

const CarouselImage = ({ image }) => {
  return (
    <Paper
      elevation={3}
      component={'img'}
      sx={{
        width: { xs: '100%' },
        height: { xs: 350, sm: 400, md: 450 },
        objectFit: 'cover'
      }}
      alt={image.alt || image.title}
      src={image.src || image.image}
    />
  );
};

export default CarouselImage;
