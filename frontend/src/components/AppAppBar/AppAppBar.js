import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const links = [
  {
    title: 'Home',
    href: '/'
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

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
            {links.map((link) => (
              <Link
                color="inherit"
                variant="caption"
                underline="none"
                key={link.title}
                href={link.href}
                sx={{
                  fontSize: 16,
                  ml: 3,
                  color: link.color || 'common.white'
                }}
              >
                {link.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default AppAppBar;
