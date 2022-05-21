import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveAppBarTabs(props) {
  const { pages } = props;

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button
          component={Link}
          to={page.href}
          key={page.title}
          sx={{
            my: 2,
            display: 'flex',
            alignItems: 'flex-start',
            color: page.color || 'secondary.light',
            textTransform: 'none',
            textDecoration: 'none'
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}

export default ResponsiveAppBarTabs;
