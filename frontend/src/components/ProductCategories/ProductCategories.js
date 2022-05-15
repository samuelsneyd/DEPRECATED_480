import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

const absolutePosition = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const ImageBackdrop = styled('div')(({ theme }) => ({
  ...absolutePosition,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity')
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100
  },
  '&:hover': {
    zIndex: 1
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15
  },
  '&:hover .imageMarked': {
    opacity: 0
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor'
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`
  }
}));

const images = [
  {
    url: '../../../../static/images/accommodation.jpg',
    title: 'Accommodation',
    width: '40%'
  },
  {
    url: '../../../../static/images/cake.jpg',
    title: 'Food',
    width: '20%'
  },
  {
    url: '../../../../static/images/marina-boats.jpg',
    title: 'Boating',
    width: '40%'
  },
  {
    url: '../../../../static/images/school-of-fish.jpg',
    title: 'Swimming',
    width: '38%'
  },
  {
    url: '../../../../static/images/bird3.jpg',
    title: 'Birdwatching',
    width: '38%'
  },
  {
    url: '../../../../static/images/beach.jpg',
    title: 'Beaches',
    width: '24%'
  },
  {
    url: '../../../../static/images/rainbow.jpg',
    title: 'Hiking',
    width: '40%'
  },
  {
    url: '../../../../static/images/boat.jpg',
    title: 'Ocean',
    width: '20%'
  },
  {
    url: '../../../../static/images/night-sky-2.jpg',
    title: 'Stargazing',
    width: '40%'
  }
];

function ProductCategories() {
  return (
    <Container component="section" sx={{
      mt: 8,
      mb: 4
    }}>
      <Typography variant="h4" marked="center" align="center" component="h4">
      </Typography>
      <Box sx={{
        mt: 8,
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width
            }}
          >
            <Box
              sx={{
                ...absolutePosition,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`
              }}
            />
            <ImageBackdrop className="imageBackdrop"/>
            <Box
              sx={{
                ...absolutePosition,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white'
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked"/>
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

export default ProductCategories;
