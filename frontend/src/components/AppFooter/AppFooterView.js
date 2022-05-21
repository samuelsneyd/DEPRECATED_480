import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Copyright from '../Copyright/Copyright';
import WebsiteBuiltBy from '../WebsiteBuiltBy/WebsiteBuiltBy';
import withRoot from '../../config/withRoot';

function AppFooterView(props) {
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
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Button
                    variant={'text'}
                    disableRipple
                    disableFocusRipple
                    sx={{
                      py: 0,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      '&.MuiButtonBase-root:hover': {
                        bgcolor: 'transparent',
                        cursor: 'default'
                      }
                    }}
                  >
                    <Typography variant="h6" color="text.primary" gutterBottom>
                      {footer.title}
                    </Typography>
                  </Button>
                  <Box component="ul" sx={{
                    m: 0,
                    listStyle: 'none',
                    p: 0
                  }}>
                    {footer.description.map((item) => (
                      <Box component="li" key={item.text} sx={{ py: 0 }}>
                        <Button variant={'text'} sx={{
                          textTransform: 'none',
                          justifyContent: 'flex-start',
                          py: 0.5
                        }}>
                          <Typography
                            variant={'subtitle2'}
                            component={Link}
                            to={item.href}
                            sx={{
                              color: 'inherit',
                              fontWeight: 'light'
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Button>
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

export default withRoot(AppFooterView);
