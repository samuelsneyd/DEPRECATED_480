import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const BookingPage = () => {
  return (
    <Container>
      <PageTitle title={'Booking'}/>
    </Container>
  );
};

export default withRoot(BookingPage);
