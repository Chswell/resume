import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '~/components/Footer';
import PageLoader from '~/components/PageLoader';
import Header from '~/components/Header';
import ParallaxWords from '~/components/ParallaxWords';

const AboutPage: React.FC = () => {
  return (
    <>

    <Box>
      <Header />
      <Container>
        <Box sx={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: -11 }}>
          <ParallaxWords />
        </Box>
        <Box>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </Box>
      </Container>
      <Footer />
      <PageLoader />
    </Box>
      </>
  );
};

export default AboutPage;
