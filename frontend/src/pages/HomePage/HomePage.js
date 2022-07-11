import * as React from 'react';
import CallToAction from '../../components/CallToAction/CallToAction';
import ContactBanner from '../../components/ContactBanner/ContentBanner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Features from '../../components/Features/Features';
import ProductValues from '../../components/ProductValues/ProductValues';
import withAnimation from '../../hooks/withAnimation';

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <ProductValues />
      <Features />
      <HowItWorks />
      <CallToAction />
      <ContactBanner />
    </>
  );
};

export default withAnimation(HomePage);
