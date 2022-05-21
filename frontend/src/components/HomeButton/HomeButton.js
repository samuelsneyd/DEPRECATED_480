import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/config';

function HomeButton(props) {
  const { sx } = props;
  return (
    <Button
      component={Link}
      to={'/'}
      size={'large'}
      sx={{
        mr: 2,
        color: 'inherit',
        display: 'flex',
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: 'large',
        ...sx
      }}
    >
      {config.siteName}
    </Button>
  );
}

export default HomeButton;
