import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const FAQPage = () => {
  return (
    <Container>
      <PageTitle title={'FAQ'}/>
    </Container>
  );
};

export default withRoot(FAQPage);
