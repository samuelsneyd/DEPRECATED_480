import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import HeroHeaderLayout from './HeroHeaderLayout';
import theme from '../../config/theme';

const backgroundImage = '../../../../static/images/home_page.jpg';
const logo = '../../../../static/images/logo_text.png';

const HeroHeader = () => {
  return (
    <HeroHeaderLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt={'increase priority'}
      />
      <Link to={'/about/'}>
        <Paper
          component={'img'}
          src={logo}
          sx={{
            maxHeight: '35vh',
            maxWidth: '100%',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            my: 4
          }}
        />
      </Link>
      <Button
        color={'secondary'}
        variant={'contained'}
        size={'large'}
        component={Link}
        to={'/book/'}
      >
        {'Book Now'}
      </Button>
    </HeroHeaderLayout>
  );
};

export default HeroHeader;
