import { useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import withRoot from '../../config/withRoot';
import HomeButton from '../HomeButton/HomeButton';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import ResponsiveAppBarTabs from '../ResponsiveAppBarTabs/ResponsiveAppBarTabs';

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
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Optional icon or logo */}
          {/* <MenuIcon sx={{ display: 'flex', mr: 1 }}/> */}
          {isMobile
            ? (
              <>
                <MobileDrawer/>
                <HomeButton/>
              </>
            )
            : (
              <>
                <HomeButton/>
                <ResponsiveAppBarTabs pages={pages}/>
              </>
            )
          }
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
};

export default withRoot(ResponsiveAppBar);
