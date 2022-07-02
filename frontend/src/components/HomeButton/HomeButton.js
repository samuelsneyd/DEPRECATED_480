import * as React from 'react';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import config from '../../config/config';

const HomeButton = () => {
  const { setActiveTab } = useContext(Context);

  return (
    <Button
      component={Link}
      variant={'outlined'}
      to={'/'}
      size={'large'}
      onClick={() => setActiveTab(config.siteName)}
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
