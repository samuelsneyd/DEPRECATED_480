import * as React from 'react';
import ActivitiesView from './ActivitiesView';

const images = [
  {
    url: '../../../../static/images/accommodation.jpg',
    title: 'Accommodation',
    width: '40%'
  },
  {
    url: '../../../../static/images/cake.jpg',
    title: 'Food',
    width: '20%'
  },
  {
    url: '../../../../static/images/marina-boats.jpg',
    title: 'Boating',
    width: '40%'
  },
  {
    url: '../../../../static/images/school-of-fish.jpg',
    title: 'Swimming',
    width: '38%'
  },
  {
    url: '../../../../static/images/bird3.jpg',
    title: 'Birdwatching',
    width: '38%'
  },
  {
    url: '../../../../static/images/beach.jpg',
    title: 'Beaches',
    width: '24%'
  },
  {
    url: '../../../../static/images/rainbow.jpg',
    title: 'Hiking',
    width: '40%'
  },
  {
    url: '../../../../static/images/boat.jpg',
    title: 'Ocean',
    width: '20%'
  },
  {
    url: '../../../../static/images/night-sky-2.jpg',
    title: 'Stargazing',
    width: '40%'
  }
];

const Activities = () => {
  return <ActivitiesView images={images} />
};

export default Activities;
