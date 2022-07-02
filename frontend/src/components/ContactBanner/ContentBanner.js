import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ContentBanner = () => {
  return (
    <Container
      component={'section'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 9
      }}
    >
      <Button
        component={Link}
        to={'/contact/'}
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
          textTransform: 'none'
        }}
      >
        <Typography variant={'h4'} component={'span'}>
          {'Got any questions?'}
        </Typography>
      </Button>
      <Typography variant={'subtitle1'} sx={{ my: 3 }}>
        {'We are here to help. Get in touch!'}
      </Typography>
      <Box
        component={'img'}
        src={''}
        alt={'img1'}
        sx={{ width: 60 }}
      />
    </Container>
  );
};

export default ContentBanner;
