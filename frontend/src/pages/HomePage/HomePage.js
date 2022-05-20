import * as React from 'react';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import ProductCTA from '../../components/ProductCTA/ProductCTA';
import ProductHero from '../../components/ProductHero/ProductHero';
import ProductHowItWorks from '../../components/ProductHowItWorks/ProductHowItWorks';
import ProductSmokingHero from '../../components/ProductSmokingHero/ProductSmokingHero';
import ProductValues from '../../components/ProductValues/ProductValues';
import withRoot from '../../config/withRoot';

function Index() {
  return (
    <>
      <ProductHero/>
      <ProductValues/>
      <ProductCategories/>
      <ProductHowItWorks/>
      <ProductCTA/>
      <ProductSmokingHero/>
    </>
  );
}

export default withRoot(Index);
