import * as React from 'react';
import FeaturesView from './FeaturesView';

const images = [
  {
    src: '../../../../static/images/accommodation.jpg',
    href: '/accommodation/',
    title: 'Accommodation',
    width: '40%'
  },
  {
    src: '../../../../static/images/boat.jpg',
    href: '/features/ocean/',
    title: 'Ocean',
    width: '20%'
  },
  {
    src: '../../../../static/images/marina-boats.jpg',
    href: '/features/boating/',
    title: 'Boating',
    width: '40%'
  },
  {
    src: '../../../../static/images/school-of-fish.jpg',
    href: '/features/swimming/',
    title: 'Swimming',
    width: '38%'
  },
  {
    src: '../../../../static/images/bird3.jpg',
    href: '/features/birds/',
    title: 'Birds',
    width: '38%'
  },
  {
    src: '../../../../static/images/beach.jpg',
    href: '/features/beaches/',
    title: 'Beaches',
    width: '24%'
  },
  {
    src: '../../../../static/images/rainbow.jpg',
    href: '/features/hiking/',
    title: 'Hiking',
    width: '40%'
  },
  {
    src: '../../../../static/images/cake.jpg',
    href: '/features/restaurants/',
    title: 'Restaurants',
    width: '20%'
  },
  {
    src: '../../../../static/images/night-sky-2.jpg',
    href: '/features/stars/',
    title: 'Stargazing',
    width: '40%'
  }
];

const Features = () => {
  return (
    <FeaturesView images={images} />
  );
};

export default Features;
