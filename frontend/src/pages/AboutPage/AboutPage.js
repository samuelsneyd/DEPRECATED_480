import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const AboutPage = () => {
  return (
    <Container>
      <PageTitle title={'About'}/>
    </Container>
  );
};

export default withRoot(AboutPage);
