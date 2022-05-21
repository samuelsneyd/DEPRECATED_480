import * as React from 'react';
import Container from '@mui/material/Container';
import Markdown from '../../components/Markdown/Markdown';
import PageTitle from '../../components/PageTitle/PageTitle';
import withRoot from '../../config/withRoot';
import terms from '../../../static/legal/terms.md';

const TermsPage = () => {
  return (
    <Container>
      <PageTitle title={'Terms and Conditions'}/>
      <Markdown>{terms}</Markdown>
    </Container>
  );
};

export default withRoot(TermsPage);
