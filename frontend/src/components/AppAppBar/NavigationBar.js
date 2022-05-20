import * as React from 'react';
import NavigationBarView from './NavigationBarView';

const links = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Your Loft',
    href: '/accommodation/'
  },
  {
    title: 'Location',
    href: '/location/'
  },
  {
    title: 'Activities',
    href: '/activities/'
  },
  {
    title: 'Book Now',
    href: '/book/',
    color: 'secondary.main'
  },
  {
    title: 'Contact',
    href: '/contact/'
  }
];

function NavigationBar() {
  return (
    <NavigationBarView links={links}/>
  );
}

export default NavigationBar;
