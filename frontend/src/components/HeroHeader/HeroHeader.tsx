import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Typography } from '@mui/material';
import HeroHeaderLayout from './HeroHeaderLayout';
import config from '../../config/config';
import theme from '../../config/theme';

const backgroundImage = '../../../../static/images/home_page.jpg';
const logo = '../../../../static/images/logo_plain.png';

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
            maxHeight: '45vh',
            maxWidth: '100%',
            backgroundColor: 'transparent',
            boxShadow: 'none'
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
      <Typography
        variant={'h5'}
        color={'inherit'}
        sx={{ mt: 2 }}
      >
        {config.siteSubtitle}
      </Typography>
    </HeroHeaderLayout>
  );
};

export default HeroHeader;
