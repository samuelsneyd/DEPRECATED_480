import * as React from 'react';
import AppFooterView from './AppFooterView';
import withRoot from '../../config/withRoot';
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
      },
      {
        text: 'Location',
        href: '/location/'
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

function AppFooter() {
  return (
    <AppFooterView footers={footers}/>
  );
}

export default withRoot(AppFooter);
