import * as React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import withRoot from '../../config/withRoot';

function ContactPage() {
  return (
    <ContactForm/>
  );
}

export default withRoot(ContactPage);
