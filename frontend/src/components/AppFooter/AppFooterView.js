import * as React from 'react';
import { Container, Typography } from '@mui/material';
import AppFooterLinks from './AppFooterLinks';
import Copyright from '../Copyright/Copyright';
import WebsiteBuiltBy from '../WebsiteBuiltBy/WebsiteBuiltBy';

const AppFooterView = ({ footers }) => {
  return (
    <Typography
      component={'footer'}
      sx={{
        display: 'flex',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        my: 4,
        display: 'flex'
      }}>
        <Container spacing={5}>
          <Container
            maxWidth={'md'}
            component={'footer'}
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              py: 4
            }}
          >
            <AppFooterLinks footers={footers} />
          </Container>
          <Container sx={{ mb: 1 }}>
            <Copyright />
          </Container>
          <Container>
            <WebsiteBuiltBy />
          </Container>
        </Container>
      </Container>
    </Typography>
  );
};

export default AppFooterView;
