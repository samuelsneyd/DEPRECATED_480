import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import withRoot from '../../config/withRoot';

const FAQPage = () => {
  return (
    <Container>
      <PageTitle title={'FAQ'}/>
      <ProductCategories/>
    </Container>
  );
};

export default withRoot(FAQPage);
