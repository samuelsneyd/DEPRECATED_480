import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function ContactForm() {
  return (
    <>
      <Grid container spacing={1} direction={'column'} alignItems={'center'} justify={'center'}>
        <Grid item xs={6} mb={4}>
          <Container>
            <Box sx={{
              mt: 7,
              mb: 7
            }}>
              <Typography variant="h3" gutterBottom marked="center" align="center">
                {'Contact us'}
              </Typography>
            </Box>
          </Container>
          <Card style={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant={'h5'} gutterBottom>{'Get in touch'}</Typography>
              <Typography variant={'body2'} color={'textSecondary'} component={'p'}
                          gutterBottom
              >
                {'Send us a message and will get back to you as soon as possible'}
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField label={'First Name'} placeholder={'Enter first name'} variant={'outlined'} fullWidth
                               required/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label={'Last Name'} placeholder={'Enter last name'} variant={'outlined'} fullWidth
                               required/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type={'email'} label={'Email'} placeholder={'Enter email'} variant={'outlined'} fullWidth
                               required/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label={'Message'} placeholder={'Enter message'} variant={'outlined'} fullWidth required
                               multiline minRows={6}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type={'submit'} variant={'contained'} color={'secondary'} fullWidth>
                      {'Submit'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactForm;
