import * as React from 'react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import config from '../../config/config';

const HomeButton = () => {
  const location = useLocation();

  return (
    <Button
      component={Link}
      variant={location.pathname === '/' ? 'contained' : 'outlined'}
      to={'/'}
      size={'large'}
      sx={{
        color: 'inherit',
        display: 'flex',
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: 'large'
      }}
    >
      {config.siteName}
    </Button>
  );
};

export default HomeButton;
