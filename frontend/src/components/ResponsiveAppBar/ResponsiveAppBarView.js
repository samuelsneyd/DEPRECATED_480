import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeButton from '../HomeButton/HomeButton';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import ResponsiveAppBarTabs from './ResponsiveAppBarTabs';

const ResponsiveAppBarView = (props) => {
  const {
    isMobile,
    pages,
    activeTab,
    setActiveTab
  } = props;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Optional icon or logo */}
          {/* <MenuIcon sx={{ display: 'flex', mr: 1 }}/> */}
          {isMobile
            ?
            <>
              <MobileDrawer/>
              <HomeButton setActiveTab={setActiveTab}/>
            </>
            :
            <>
              <HomeButton setActiveTab={setActiveTab}/>
              <ResponsiveAppBarTabs
                pages={pages}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </>
          }
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
};

export default ResponsiveAppBarView;
