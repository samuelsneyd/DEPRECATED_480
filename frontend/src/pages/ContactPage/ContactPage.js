import * as React from 'react';
import AppAppBar from '../../components/AppAppBar/AppAppBar';
import AppFooter from '../../components/AppFooter/AppFooter';
import ContactForm from '../../components/ContactForm/ContactForm';
import withRoot from '../../config/withRoot';

function ContactPage() {
  return (
    <>
      <AppAppBar/>
      <ContactForm/>
      <AppFooter/>
    </>
  );
}

export default withRoot(ContactPage);
