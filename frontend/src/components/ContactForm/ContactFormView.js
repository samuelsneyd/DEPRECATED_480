import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function ContactFormView(props) {
  const {
    values,
    errors,
    minMessageLength,
    messageHelperText,
    handleInputChange,
    handleSubmit
  } = props;

  return (
    <Grid
      container
      spacing={1}
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
    >
      <Grid item xs={6} mb={4}>
        <Container>
          <Box sx={{ mt: 7, mb: 7 }}>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              {'Contact us'}
            </Typography>
          </Box>
        </Container>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography
              variant={'h5'}
              gutterBottom
            >
              {'Get in touch'}
            </Typography>
            <Typography
              variant={'body2'}
              color={'textSecondary'}
              component={'p'}
              gutterBottom sx={{ pb: 1 }}
            >
              {'Send us a message and will get back to you as soon as possible'}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label={'First Name'}
                    placeholder={'Enter first name'}
                    variant={'outlined'}
                    name={'firstName'}
                    value={values.firstName}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label={'Last Name'}
                    placeholder={'Enter last name'}
                    variant={'outlined'}
                    name={'lastName'}
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // type={'email'}
                    label={'Email'}
                    placeholder={'Enter email'}
                    variant={'outlined'}
                    name={'email'}
                    value={values.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={'Message'}
                    placeholder={'Enter message'}
                    variant={'outlined'}
                    name={'message'}
                    value={values.message}
                    onChange={handleInputChange}
                    error={!!errors.message}
                    helperText={values.message?.length < minMessageLength ? messageHelperText : ''}
                    fullWidth
                    multiline
                    minRows={6}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type={'submit'}
                    variant={'contained'}
                    color={'secondary'}
                    fullWidth
                  >
                    {'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ContactFormView;
