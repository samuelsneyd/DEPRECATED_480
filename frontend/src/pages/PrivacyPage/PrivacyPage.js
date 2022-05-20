import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppFooter from '../../components/AppFooter/AppFooter';
import Markdown from '../../components/Markdown/Markdown';
import NavigationBar from '../../components/AppAppBar/NavigationBar';
import withRoot from '../../config/withRoot';
import privacy from '../../../static/legal/privacy.md';

function PrivacyPage() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
}

export default withRoot(PrivacyPage);
