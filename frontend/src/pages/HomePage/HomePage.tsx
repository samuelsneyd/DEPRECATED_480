import * as React from 'react';
import CallToAction from '../../components/CallToAction/CallToAction';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HowToBook from '../../components/HowToBook/HowToBook';
import Features from '../../components/Features/Features';
import ProductValues from '../../components/ProductValues/ProductValues';
import withAnimation from '../../hooks/withAnimation';

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <ProductValues />
      <Features />
      <HowToBook />
      <CallToAction />
      <ContactBanner />
    </>
  );
};

export default withAnimation(HomePage);
