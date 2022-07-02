import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import Activities from '../../components/Activities/Activities';

const ActivitiesPage = () => {
  return (
    <Container>
      <PageTitle title={'Activities'} />
      <Activities />
    </Container>
  );
};

export default ActivitiesPage;
