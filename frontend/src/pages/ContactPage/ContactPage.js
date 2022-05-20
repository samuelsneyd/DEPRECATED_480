import * as React from 'react';
import AppFooter from '../../components/AppFooter/AppFooter';
import ContactForm from '../../components/ContactForm/ContactForm';
import NavigationBar from '../../components/AppAppBar/NavigationBar';
import withRoot from '../../config/withRoot';

function ContactPage() {
  return (
    <>
      <NavigationBar/>
      <ContactForm/>
      <AppFooter/>
    </>
  );
}

export default withRoot(ContactPage);
