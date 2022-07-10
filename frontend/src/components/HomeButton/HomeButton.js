import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '../../config/config';

const HomeButton = () => {
  return (
    <Button
      component={Link}
      variant={'outlined'}
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
