import * as React from 'react';
import AppFooter from '../../components/AppFooter/AppFooter';
import NavigationBar from '../../components/AppAppBar/NavigationBar';
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
      <NavigationBar/>
      <ProductHero/>
      <ProductValues/>
      <ProductCategories/>
      <ProductHowItWorks/>
      <ProductCTA/>
      <ProductSmokingHero/>
      <AppFooter/>
    </>
  );
}

export default withRoot(Index);
