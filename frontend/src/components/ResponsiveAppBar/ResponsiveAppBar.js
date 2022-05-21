import * as React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveAppBarView from './ResponsiveAppBarView';
import withRoot from '../../config/withRoot';

const pages = [
  {
    title: 'About',
    href: '/about/'
  },
  {
    title: 'Your Loft',
    href: '/accommodation/'
  },
  {
    title: 'Location',
    href: '/location/'
  },
  {
    title: 'Activities',
    href: '/activities/'
  },
  {
    title: 'Book Now',
    href: '/book/',
    color: 'secondary.main'
  },
  {
    title: 'Contact',
    href: '/contact/'
  }
];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ResponsiveAppBarView
      isMobile={isMobile}
      pages={pages}
    />
  );
};

export default withRoot(ResponsiveAppBar);
