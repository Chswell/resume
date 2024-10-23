import { Box, Container } from '@mui/material';
import Footer from '~/components/Footer';
import PageLoader from '~/components/PageLoader';
import CompanyMarquee from '~/components/CompanyMarquee';
import NewTechnologies from '~/components/primaryWords/NewTechnologies';
import Frontend from '~/components/primaryWords/Frontend';
import Memes from '~/components/primaryWords/Memes';
import Header from '~/components/Header';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box className={styles.mainText}>
          <div>
            I'm a <Frontend /> developer from Kemerovo, Russia. I write <br />code, love cat <Memes /> <br />and
            study <br /><NewTechnologies />
          </div>
        </Box>
      </Container>
      <CompanyMarquee />

      <Footer />
      <PageLoader />
    </div>
  );
};

export default HomePage;
