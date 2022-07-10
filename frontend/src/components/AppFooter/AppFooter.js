import * as React from 'react';
import withAnimation from '../../hooks/withAnimation';
import AppFooterView from './AppFooterView';
import config from '../../config/config';

const footers = [
  {
    title: config.siteName,
    description: [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'About',
        href: '/about/'
      },
      {
        text: 'Contact',
        href: '/contact/'
      }
    ]
  },
  {
    title: 'Features',
    description: [
      {
        text: 'Accommodation',
        href: '/accommodation/'
      },
      {
        text: 'Activities',
        href: '/activities/'
      },
      {
        text: 'Location',
        href: '/location/'
      }
    ]
  },
  {
    title: 'Legal',
    description: [
      {
        text: 'Terms',
        href: '/terms/'
      },
      {
        text: 'Privacy',
        href: '/privacy/'
      }
    ]
  },
  {
    title: 'Misc',
    description: [
      {
        text: 'FAQ',
        href: '/faq/'
      }
    ]
  }
];

const AppFooter = () => (
  <AppFooterView footers={footers} />
);

export default withAnimation(AppFooter);
