import * as React from 'react';
import { useState } from 'react';
import MobileDrawerView from './MobileDrawerView';

const pages = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About Us',
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
    title: 'In the Area',
    href: '/features/'
  },
  {
    title: 'Book Now',
    href: '/book/'
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
