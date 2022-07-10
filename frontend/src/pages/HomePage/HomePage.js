import * as React from 'react';
import Activities from '../../components/Activities/Activities';
import CallToAction from '../../components/CallToAction/CallToAction';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import ContactBanner from '../../components/ContactBanner/ContentBanner';
import ProductValues from '../../components/ProductValues/ProductValues';
import withAnimation from '../../hooks/withAnimation';

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <ProductValues />
      <Activities />
      <HowItWorks />
      <CallToAction />
      <ContactBanner />
    </>
  );
};

export default withAnimation(HomePage);
