import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const AppFooterLinks = (props) => {
  const { footers } = props;

  return (
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
  );
};

export default AppFooterLinks;
