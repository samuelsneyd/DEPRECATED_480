import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const BookingPage = () => {
  return (
    <Container>
      <PageTitle title={'Booking'} />
    </Container>
  );
};

export default withAnimation(BookingPage);
