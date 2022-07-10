import * as React from 'react';
import { Box, Button } from '@mui/material';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const ResponsiveAppBarTabs = ({ pages }) => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button
          component={Link}
          variant={location.pathname === page.href ? 'contained' : 'text'}
          to={page.href}
          key={page.title}
          sx={{
            my: 2,
            px: 1,
            display: 'flex',
            alignItems: 'flex-start',
            color: page.color || 'secondary.light',
            textTransform: 'none',
            textDecoration: 'none',
            fontWeight: 'light',
            fontSize: 'medium'
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};

export default ResponsiveAppBarTabs;
