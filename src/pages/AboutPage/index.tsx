import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '~/components/Footer';
import PageLoader from '~/components/PageLoader';
import Header from '~/components/Header';
import ParallaxWords from '~/components/ParallaxWords';
import RandomListItem from '~/components/RandomListItem';
import styles from './AboutPage.module.scss';
import { motion } from 'framer-motion';

const hardSkills = [
  'TypeScript',
  'React',
  'React Native',
  'JavaScript',
  'Mobx',
  'Vite',
  'Webpack',
  'Framer Motion',
  'MaterialUI',
  'CSS',
  'HTML',
  'Git'
];
const softSkills = [
  'Teamwork',
  'Time management',
  'Readiness for change',
  'Punctuality',
  'Purposefulness',
  'responsibility'
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Box>
        <Header />
        <Container>
          <Box sx={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: -11 }}>
            <ParallaxWords />
          </Box>

          <Container className={styles.container}>
            <motion.div
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'ease' }}
            >
              My skills
            </motion.div>
            <Box className={styles.containerListItems}>
              <Box className={styles.listItems}>
                <motion.p
                  className={styles.subTitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: 'ease' }}
                >
                  Hard
                </motion.p>
                {hardSkills.map((item, index) => (
                  <RandomListItem key={`item-${index}`} text={item} />
                ))}
              </Box>
            </Box>
            <Box className={styles.containerListItems}>
              <Box className={styles.listItems}>
                <motion.p
                  className={styles.subTitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: 'ease' }}
                >
                  Soft
                </motion.p>
                {softSkills.map((item, index) => (
                  <RandomListItem key={`item-${index + 8}`} text={item} />
                ))}
              </Box>
            </Box>
          </Container>
        </Container>
        <Footer />
        <PageLoader />
      </Box>
    </>
  );
};

export default AboutPage;

