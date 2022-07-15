import * as React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const BookingPage = () => {
  return (
    <Container>
      <PageTitle title={'Booking'} />
      <Typography variant={'h5'} sx={{ my: 2 }} align={'center'}>
        {'Booking coming soon!'}
      </Typography>
    </Container>
  );
};

export default withAnimation(BookingPage);
