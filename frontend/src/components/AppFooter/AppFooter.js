import * as React from 'react';
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <>
      {'© '}
      <Link color="inherit" href="/">
        Retreat 480
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark'
  }
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English'
  }
];

function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{
        display: 'flex',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        my: 8,
        display: 'flex'
      }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="/" sx={iconStyle}>
                  <img
                    src=""
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="/" sx={iconStyle}>
                  <img
                    src=""
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{
              m: 0,
              listStyle: 'none',
              p: 0
            }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true
              }}
              sx={{
                mt: 1,
                width: 150
              }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Website built by '}
              <Link href="https://github.com/samuelsneyd"
                    rel="sponsored"
                    title="Samuel"
                    target="_blank"
              >
                Samuel Sneyd
              </Link>
              {'. See source code on '}
              <Link href="https://github.com/samuelsneyd/retreat_480"
                    rel="sponsored"
                    title="GitHub Repository"
                    target="_blank"
              >
                GitHub
              </Link>
              {'. Licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default AppFooter;
