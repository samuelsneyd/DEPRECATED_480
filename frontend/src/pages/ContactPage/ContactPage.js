import * as React from 'react';
import Container from '@mui/material/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';

const ContactPage = () => {
  return (
    <Container>
      <PageTitle title={'Contact us'}/>
      <ContactForm/>
    </Container>
  );
};

export default withRoot(ContactPage);
