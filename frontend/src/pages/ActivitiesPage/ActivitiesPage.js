import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import Activities from '../../components/Activities/Activities';
import withAnimation from '../../hooks/withAnimation';

const ActivitiesPage = () => {
  return (
    <Container>
      <PageTitle title={'In the Area'} />
      <Activities />
    </Container>
  );
};

export default withAnimation(ActivitiesPage);
