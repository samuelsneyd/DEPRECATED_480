import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const leftLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3
};

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
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={leftLink}
            >
              {'Home'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={leftLink}
            >
              {'Your loft'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={leftLink}
            >
              {'Location'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={leftLink}
            >
              {'Around the area'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={{
                ...leftLink,
                color: 'secondary.main'
              }}
            >
              {'Book now'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={leftLink}
            >
              {'Contact'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default AppAppBar;
