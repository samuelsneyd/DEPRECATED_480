import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';

const MobileDrawerView = (props) => {
  const {
    pages,
    openDrawer,
    setOpenDrawer,
    setActiveTab
  } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page) => {
            return (
              <ListItemButton
                key={page.title}
                component={Link}
                to={page.href}
                onClick={() => {
                  setOpenDrawer(false);
                  setActiveTab(page.href);
                }}
              >
                <ListItemText>
                  {page.title}
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        size={'large'}
        aria-label={'menu icon'}
        aria-controls={'menu-appbar'}
        aria-haspopup={'true'}
        onClick={() => setOpenDrawer(!openDrawer)}
        color={'inherit'}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default MobileDrawerView;
