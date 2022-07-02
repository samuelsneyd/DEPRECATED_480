import * as React from 'react';
import { useContext } from 'react';
import { Box, Button } from '@mui/material';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';

function ResponsiveAppBarTabs({ pages }) {
  const { activeTab, setActiveTab } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button
          component={Link}
          variant={activeTab === page.href ? 'contained' : 'text'}
          to={page.href}
          key={page.title}
          onClick={() => setActiveTab(page.href)}
          sx={{
            my: 2,
            px: 1,
            display: 'flex',
            alignItems: 'flex-start',
            color: page.color || 'secondary.light',
            textTransform: 'none',
            textDecoration: 'none',
            fontWeight: 'light',
            fontSize: 'medium',
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}

export default ResponsiveAppBarTabs;
