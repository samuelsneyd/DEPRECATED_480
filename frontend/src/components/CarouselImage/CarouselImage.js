import React from 'react';
import { Paper } from '@mui/material';

const CarouselImage = ({ image }) => {
  return (
    <Paper
      elevation={3}
      component={'img'}
      sx={{
        minHeight: { xs: 250, md: 450 },
        minWidth: { xs: '100%' },
        maxWidth: { xs: '100%' },
        objectFit: 'cover'
      }}
      alt={image.alt || image.title}
      src={image.src}
    />
  );
};

export default CarouselImage;
