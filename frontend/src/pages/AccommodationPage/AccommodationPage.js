import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const AccommodationPage = () => {
  return (
    <Container>
      <PageTitle title={'Your Loft'}/>
    </Container>
  );
};

export default withRoot(AccommodationPage);
