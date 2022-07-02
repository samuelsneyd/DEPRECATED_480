import * as React from 'react';
import ResponsiveAppBarView from './ResponsiveAppBarView';
import useIsMobile from '../../hooks/useIsMobile';

const pages = [
  {
    title: 'About',
    href: '/about/'
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

const ResponsiveAppBar = () => {
  const isMobile = useIsMobile();

  return (
    <ResponsiveAppBarView
      isMobile={isMobile}
      pages={pages}
    />
  );
};

export default ResponsiveAppBar;
