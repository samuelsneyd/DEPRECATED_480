import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function NavigationBarView(props) {
  const { links } = props;

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
                  color: link.color || 'secondary.light'
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

export default NavigationBarView;
