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
    setOpenDrawer
  } = props;

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((link) => {
            return (
              <ListItemButton
                key={link.title}
                component={Link}
                to={link.href}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText>
                  {link.title}
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
