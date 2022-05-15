import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Copyright from '../Copyright/Copyright';
import WebsiteBuiltBy from '../WebsiteBuiltBy/WebsiteBuiltBy';
import config from '../../config/config';

const footers = [
  {
    title: config.siteName,
    description: [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'About',
        href: '/about/'
      },
      {
        text: 'Contact',
        href: '/contact/'
      },
      {
        text: 'Location',
        href: '/location/'
      }
    ]
  },
  {
    title: 'Features',
    description: [
      {
        text: 'Accommodation',
        href: '/accommodation/'
      },
      {
        text: 'Activities',
        href: '/activities/'
      }
    ]
  },
  {
    title: 'Legal',
    description: [
      {
        text: 'Privacy Policy',
        href: '/privacy/'
      },
      {
        text: 'Terms and Conditions',
        href: '/terms/'
      }
    ]
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
                      <Box component="li" key={item.text} sx={{ py: 0.5 }}>
                        <Link href={item.href}>
                          {item.text}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
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
}

export default AppFooter;
