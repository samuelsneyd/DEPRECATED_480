import * as React from 'react';
import AppAppBar from '../../components/AppAppBar/AppAppBar';
import AppFooter from '../../components/AppFooter/AppFooter';
import Pricing from '../../components/Pricing/Pricing';
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
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Index);
