import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const LocationPage = () => {
  return (
    <Container>
      <PageTitle title={'Location'}/>
    </Container>
  );
};

export default withRoot(LocationPage);
