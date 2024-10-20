import { Box, Container } from '@mui/material';
import Footer from '~/components/Footer';
import PageLoader from '~/components/PageLoader';
import Header from '~/components/Header';

const AboutPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Box></Box>
      </Container>
      <Footer />
      <PageLoader />
    </Box>
  );
};

export default AboutPage;
