import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import HomeButton from '../HomeButton/HomeButton';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import ResponsiveAppBarTabs from './ResponsiveAppBarTabs';

const ResponsiveAppBarView = ({ isMobile, pages }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Optional icon or logo */}
          {/* <MenuIcon sx={{ display: 'flex', mr: 1 }}/> */}
          {isMobile
            ?
            <>
              <MobileDrawer />
              <HomeButton />
            </>
            :
            <>
              <MobileDrawer />
              <HomeButton />
              <ResponsiveAppBarTabs pages={pages} />
            </>
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ResponsiveAppBarView;
