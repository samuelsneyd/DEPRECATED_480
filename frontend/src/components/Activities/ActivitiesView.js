import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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

const ActivitiesView = ({ images }) => {
  return (
    <Container component={'section'} sx={{
      mt: 8,
      mb: 4
    }}>
      <Typography
        variant={'h4'}
        marked={'center'}
        align={'center'}
        component={'h4'}
      >
        {/* Optional header goes here */}
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
                backgroundImage: `url(${image.src})`
              }}
            />
            <ImageBackdrop className={'imageBackdrop'} />
            <Box
              component={Link}
              to={image.href || ''}
              sx={{
                ...absolutePosition,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
                textDecoration: 'none'
              }}
            >
              <Typography
                component={'h3'}
                variant={'h6'}
                color={'inherit'}
                className={'imageTitle'}
                sx={{
                  textTransform: 'none'
                }}
              >
                {image.title}
                <div className={'imageMarked'} />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
};

export default ActivitiesView;
