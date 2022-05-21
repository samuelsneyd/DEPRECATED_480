import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveAppBarTabs(props) {
  const {
    pages,
    activeTab,
    setActiveTab
  } = props;

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button
          component={Link}
          variant={activeTab === page.title ? 'contained' : 'text'}
          to={page.href}
          key={page.title}
          onClick={() => setActiveTab(page.title)}
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
