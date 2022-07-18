import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
      {'Home'}
    </Button>
  );
};

export default HomeButton;
