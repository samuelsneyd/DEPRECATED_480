import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Copyright from '../Copyright/Copyright';

const footers = [
  {
    title: 'Retreat 480',
    description: [
      'Home',
      'About',
      'Contact',
      'Location'
    ]
  },
  {
    title: 'Features',
    description: [
      'Accommodation',
      'Activities'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy', 'Terms']
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
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <Box component="ul" sx={{
                    m: 0,
                    listStyle: 'none',
                    p: 0
                  }}>
                    {footer.description.map((item) => (
                      <Box component="li" key={item} sx={{ py: 0.5 }}>
                        <Link href={`/${item.replace(/ /g, '-').toLowerCase()}/`}>
                          {item}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Container sx={{
            mb: 1
          }}>
            <Copyright/>
          </Container>
          <Container>
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
          </Container>
        </Container>
      </Container>
    </Typography>
  );
}

export default AppFooter;
