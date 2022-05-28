import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppFooterLinks from './AppFooterLinks';
import Copyright from '../Copyright/Copyright';
import WebsiteBuiltBy from '../WebsiteBuiltBy/WebsiteBuiltBy';
import withRoot from '../../config/withRoot';

const AppFooterView = props => {
  const { footers } = props;

  return (
    <Typography
      component="footer"
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
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              py: 4
            }}
          >
            <AppFooterLinks footers={footers}/>
          </Container>
          <Container sx={{ mb: 1 }}>
            <Copyright/>
          </Container>
          <Container>
            <WebsiteBuiltBy/>
          </Container>
        </Container>
      </Container>
    </Typography>
  );
};

export default AppFooterView;
