import * as React from 'react';
import { useState } from 'react';
import config from '../../config/config';
import MobileDrawerView from './MobileDrawerView';

const pages = [
  {
    title: config.siteName,
    href: '/'
  },
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
  },
  {
    title: 'FAQ',
    href: '/faq/'
  },
  {
    title: 'Terms',
    href: '/terms/'
  },
  {
    title: 'Privacy',
    href: '/privacy/'
  }
];

const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <MobileDrawerView
      pages={pages}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
    />
  );
};

export default MobileDrawer;
