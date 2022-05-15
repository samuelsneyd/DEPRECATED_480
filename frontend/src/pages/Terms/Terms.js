import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../../components/AppAppBar/AppAppBar';
import AppFooter from '../../components/AppFooter/AppFooter';
import Markdown from '../../components/Markdown/Markdown';
import withRoot from '../../config/withRoot';
import terms from '../../../static/legal/terms.md';

function Terms() {
  return (
    <>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms and Conditions
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
}

export default withRoot(Terms);
