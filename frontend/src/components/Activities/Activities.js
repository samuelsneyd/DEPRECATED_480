import * as React from 'react';
import ActivitiesView from './ActivitiesView';

const images = [
  {
    src: '../../../../static/images/accommodation.jpg',
    href: '/accommodation/',
    title: 'Accommodation',
    width: '40%'
  },
  {
    src: '../../../../static/images/cake.jpg',
    href: '/activities/food/',
    title: 'Food',
    width: '20%'
  },
  {
    src: '../../../../static/images/marina-boats.jpg',
    href: '/activities/boating/',
    title: 'Boating',
    width: '40%'
  },
  {
    src: '../../../../static/images/school-of-fish.jpg',
    href: '/activities/swimming/',
    title: 'Swimming',
    width: '38%'
  },
  {
    src: '../../../../static/images/bird3.jpg',
    href: '/activities/birds/',
    title: 'Birds',
    width: '38%'
  },
  {
    src: '../../../../static/images/beach.jpg',
    href: '/activities/beaches/',
    title: 'Beaches',
    width: '24%'
  },
  {
    src: '../../../../static/images/rainbow.jpg',
    href: '/activities/hiking/',
    title: 'Hiking',
    width: '40%'
  },
  {
    src: '../../../../static/images/boat.jpg',
    href: '/activities/ocean/',
    title: 'Ocean',
    width: '20%'
  },
  {
    src: '../../../../static/images/night-sky-2.jpg',
    href: '/activities/stars/',
    title: 'Stargazing',
    width: '40%'
  }
];

const Activities = () => {
  return (
    <ActivitiesView images={images} />
  );
};

export default Activities;
