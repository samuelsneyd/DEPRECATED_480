import * as React from 'react';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import withRoot from '../../config/withRoot';
import NavigationBarView from './NavigationBarView';

const links = [
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

function NavigationBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState(0);

  return (
    <NavigationBarView
      links={links}
      isMobile={isMobile}
      tabValue={tabValue}
      setTabValue={setTabValue}
    />
  );
}

export default withRoot(NavigationBar);
