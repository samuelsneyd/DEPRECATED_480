import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../../components/AppAppBar/AppAppBar';
import AppFooter from '../../components/AppFooter/AppFooter';
import Markdown from '../../components/Markdown/Markdown';
import withRoot from '../../config/withRoot';
<<<<<<< HEAD
import privacy from '../../../static/legal/privacy.md';
=======
import privacy from '../../../static/legal/privacy.md'
>>>>>>> 5c0e84d5bc6c5a5b9ff8506356da63ea04a438bb

function Privacy() {
  return (
    <>
      <AppAppBar />
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

export default withRoot(Privacy);
