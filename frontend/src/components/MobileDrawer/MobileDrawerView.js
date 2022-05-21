import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

function MobileDrawerView(props) {
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
        <MenuIcon/>
      </IconButton>
    </Box>
  );
}

export default MobileDrawerView;
