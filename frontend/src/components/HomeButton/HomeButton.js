import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import config from '../../config/config';

function HomeButton(props) {
  const { setActiveTab } = props;

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
}

export default HomeButton;
