import * as React from 'react';
import Container from '@mui/material/Container';
import Markdown from '../../components/Markdown/Markdown';
import PageTitle from '../../components/PageTitle/PageTitle';
import privacy from '../../../static/legal/privacy.md';

const PrivacyPage = () => {
  return (
    <Container>
      <PageTitle title={'Privacy Policy'}/>
      <Markdown>{privacy}</Markdown>
    </Container>
  );
};

export default PrivacyPage;
